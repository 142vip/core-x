import { applyDecorators, SetMetadata } from '@nestjs/common'
import {
  ApiExtraModels,
  ApiOkResponse,
  getSchemaPath,
} from '@nestjs/swagger'
import { ClassConstructor } from 'class-transformer'
import { METADATA_KEY_PAGINATION_VO_CLASS, METADATA_KEY_RESPONSE_VO_CLASS_KEY } from '../constants'
import { PaginationVo, ResponseNullVo, ResponseSuccessVo } from '../dtos'

/**
 * 响应类型
 */
enum ResponseDataType {
  OBJECT_DATA = 'object_data',
  ARRAY_DATA = 'array_data',
  PAGINATED_DATA = 'paginated_data',
  NULL_DATA = 'null_data',
}

/**
 * 响应VO自动转换
 * - 参考：https://docs.nestjs.cn/openapi/operations
 * @param dataType 响应数据类型
 * @param voClass 响应VO类
 */
function Response<T>(dataType: ResponseDataType, voClass?: ClassConstructor<T>) {
  if (dataType === ResponseDataType.NULL_DATA || voClass == null) {
    return applyDecorators(
      ApiOkResponse({
        description: '请求成功',
        type: ResponseNullVo,
      }),
    )
  }

  let dataSchema = {}
  // 分页
  if (dataType === ResponseDataType.PAGINATED_DATA) {
    dataSchema = {
      title: `ResponsePagination${voClass.name}`,
      allOf: [
        { $ref: getSchemaPath(PaginationVo) },
        {
          properties: {
            list: {
              type: 'array',
              items: { $ref: getSchemaPath(voClass) },
            },
          },
        },
      ],
    }
  }
  // 数组
  else if (dataType === ResponseDataType.ARRAY_DATA) {
    dataSchema = {
      title: `ResponseArray ${voClass.name}`,
      type: 'array',
      items: { $ref: getSchemaPath(voClass) },
    }
  }
  // 对象
  else if (dataType === ResponseDataType.OBJECT_DATA) {
    dataSchema = {
      title: `ResponseObject ${voClass.name}`,
      $ref: getSchemaPath(voClass),
    }
  }
  else {
    throw new Error(`ResponseDataType ${dataType} not supported`)
  }

  // 元数据设置，与拦截器对应
  const metadataKey = dataType === ResponseDataType.PAGINATED_DATA
    ? METADATA_KEY_PAGINATION_VO_CLASS
    : METADATA_KEY_RESPONSE_VO_CLASS_KEY

  return applyDecorators(
    // 设置元数据， 分页、对象
    SetMetadata(metadataKey, voClass),

    // ApiExtraModels(ResponseVo, ResponseSuccessVo, ResponseErrorVo, PaginationVo, ResponseNullVo),

    ApiExtraModels(voClass),

    // 设置默认200状态码的Swagger响应格式
    ApiOkResponse({
      description: '请求成功',
      schema: {
        title: `ResponseSuccess ${voClass.name}`,
        allOf: [
          { $ref: getSchemaPath(ResponseSuccessVo) },
          { properties: { data: dataSchema } },
        ],
      },
    }),
  )
}

/**
 * 响应装饰器 - 数组
 */
export function ApiResponseList<T>(voClass: ClassConstructor<T>) {
  return Response(ResponseDataType.ARRAY_DATA, voClass)
}

/**
 * 响应装饰器 - 对象
 */
export function ApiResponseObject<T>(voClass: ClassConstructor<T>) {
  return Response(ResponseDataType.OBJECT_DATA, voClass)
}

/**
 * 响应装饰器 - 分页
 */
export function ApiResponsePagination<T>(voClass: ClassConstructor<T>) {
  return Response(ResponseDataType.PAGINATED_DATA, voClass)
}

/**
 * 响应装饰器 - null
 */
export function ApiResponseNull() {
  return Response(ResponseDataType.NULL_DATA)
}
