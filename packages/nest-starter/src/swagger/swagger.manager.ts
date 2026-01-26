import {
  BaseEntityDto,
  BaseEntityVo,
  PaginationDto,
  PaginationVo,
  ResponseErrorVo,
  ResponseNullVo,
  ResponseSuccessVo,
  ResponseVo,
} from '@142vip/nest'
import { VipColor } from '@142vip/utils'
import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ApiResponseOptions } from '@nestjs/swagger/dist/decorators/api-response.decorator'
import { OpenAPIObject, SwaggerCustomOptions } from '@nestjs/swagger/dist/interfaces'

export interface DocumentBuilderOptions {
  title?: string
  description?: string
  version?: string
  serviceTerm?: string
  contact?: {
    name: string
    url: string
    email: string
  }
  license?: {
    name: string
    url: string
  }
  globalResponses?: ApiResponseOptions[]
}

export interface SwaggerOptions {
  /**
   * swagger路径
   */
  docPath: string
  builderOptions?: DocumentBuilderOptions
  customOptions?: SwaggerCustomOptions
}

export class SwaggerDocumentBuilder {
  public getConfig(options?: DocumentBuilderOptions): Omit<OpenAPIObject, 'paths'> {
    const document = new DocumentBuilder()
    // 初始化
    if (options == null) {
      options = {}
    }
    if (options.title != null) {
      document.setTitle(options.title)
    }

    if (options.description != null) {
      document.setDescription(options.description)
    }

    if (options.version != null) {
      document.setVersion(options.version)
    }
    if (options.serviceTerm != null) {
      document.setTermsOfService(options.serviceTerm)
    }

    if (options.contact != null) {
      document.setContact(options.contact.name, options.contact.url, options.contact.email)
    }
    if (options.license != null) {
      document.setLicense(options.license.name, options.license.url)
    }

    // 全局状态码
    if (options.globalResponses != null) {
      document.addGlobalResponse(...options.globalResponses)
    }

    return document.build()
  }
}

/**
 * 管理器
 */
export class SwaggerManager {
  private swaggerOptions: SwaggerOptions
  constructor(swaggerOptions: SwaggerOptions) {
    this.swaggerOptions = swaggerOptions
  }

  /**
   * 注册
   */
  public register(app: INestApplication): INestApplication {
    const documentConfig = new SwaggerDocumentBuilder().getConfig(this.swaggerOptions?.builderOptions)
    const document = SwaggerModule.createDocument(app, documentConfig, {
      // 通用Vo模型
      extraModels: [ResponseVo, ResponseSuccessVo, ResponseErrorVo, PaginationVo, ResponseNullVo, PaginationDto, BaseEntityDto, BaseEntityVo],
    })
    SwaggerModule.setup(this.swaggerOptions.docPath, app, document, this.swaggerOptions.customOptions)

    return app
  }
}

/**
 * Swagger终端日志模板
 */
export function getTemplate(envName: string, uiPath: string, apiUrl: string): string {
  return `📚 Swagger API：${VipColor.greenBright(envName)} 环境。
  
    ➜  Doc:      ${uiPath}
    ➜  JSON:     ${apiUrl}
  `
}
