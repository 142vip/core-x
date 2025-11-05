import { HttpException, HttpStatus } from '@nestjs/common'
import { Transform } from 'class-transformer'

export function TransformToBoolean(): PropertyDecorator {
  return Transform(({ value }) => {
    switch (typeof value) {
      case 'string':
        return value === 'true' || value === '1'
          ? true
          : value === 'false' || value === '0'
            ? false
            : value
      case 'number':
        return Boolean(value)
      default:
        return value
    }
  })
}

export function TransformToNumber(): PropertyDecorator {
  return Transform(({ value }) => Number(value))
}

export function TransformToNumberArray(): PropertyDecorator {
  return Transform(({ value }) => {
    switch (typeof value) {
      case 'string':
        return value.split(',').map(i => Number(i.trim()))
      case 'object':
        return Array.isArray(value) ? value.map(i => Number(i)) : value
      default:
        return value
    }
  })
}

export function TransformToStringArray(): PropertyDecorator {
  return Transform(({ value }) => {
    switch (typeof value) {
      case 'string':
        return value.split(',')
      case 'object':
        return Array.isArray(value) ? value.map(i => String(i)) : value
      default:
        return value
    }
  })
}

export function TransformToStringAndNumberArray(): PropertyDecorator {
  return Transform(({ value }) => {
    switch (typeof value) {
      case 'string':
        return value.split(',').map((i) => {
          const num = Number(i.trim())
          return Number.isNaN(num) ? i.trim() : num
        })
      case 'object':
        return Array.isArray(value)
          ? value.map((i) => {
              const num = Number(i)
              return Number.isNaN(num) ? i : num
            })
          : value
      default:
        return value
    }
  })
}

/**
 * 自动转化开启使用
 */
export function Trim(): PropertyDecorator {
  return Transform(p => p.value?.trim())
}

/**
 * 用于转换boolean类型的值
 */
export function DtoTransformToBoolean(): PropertyDecorator {
  return Transform(p =>
    p.obj[p.key] === 'true'
      ? true
      : p.obj[p.key] === 'false'
        ? false
        : undefined,
  )
}

/**
 * Get请求
 * 用于前端传递的字符串参数解码
 */
export function DtoDecodeURI(): PropertyDecorator {
  return Transform((p) => {
    // 对解密失败的字段，抛错
    try {
      return p.value != null ? decodeURI(p.value) : p.value
    }
    catch {
      throw new HttpException('参数格式异常', HttpStatus.BAD_REQUEST)
    }
  })
}

/**
 * 设置默认值(当值为null时生效)
 */
export function DefaultValue(value?: unknown): PropertyDecorator {
  return Transform(target => target.value ?? value)
}

/**
 * 手机号、API key等数据脱敏
 */
export function StrDesensitize(): PropertyDecorator {
  return Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value
    }

    const length = value.length

    if (length === 0) {
      return ''
    }
    else if (length <= 2) {
      return '*'.repeat(length)
    }
    else if (length === 3 || length === 4) {
      return `${value[0]}${'*'.repeat(length - 2)}${value[length - 1]}`
    }
    else {
      const start = value.slice(0, 2)
      const end = value.slice(-2)
      return `${start}${'*'.repeat(length - 4)}${end}`
    }
  })
}
