import type { DynamicModule, Provider } from '@nestjs/common'
import type {
  TypeOrmModuleOptions,
} from '@nestjs/typeorm'
import type {
  TypeOrmModuleAsyncOptions,
} from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface'
import type { DataSource } from 'typeorm'
import {
  getDataSourceToken,
  getRepositoryToken,
  TypeOrmModule,
} from '@nestjs/typeorm'
import { TYPEORM_CUSTOM_REPOSITORY } from './typeorm.constant'

type EntitiesOrRepositories = (new (...args: any) => any)[]

// types.setTypeParser(types.builtins.INT8, val => Number.parseInt(val, 10))
// types.setTypeParser(types.builtins.NUMERIC, val => Number.parseFloat(val))

export class TypeormModule {
  public static forFeature(entitiesOrRepositories: EntitiesOrRepositories, token?: string): DynamicModule {
    const providers: Provider[] = []

    const entities = entitiesOrRepositories.map((Repository) => {
      const entity = Reflect.getMetadata(TYPEORM_CUSTOM_REPOSITORY, Repository)
      if (entity) {
        providers.push({
          provide: getRepositoryToken(Repository, token),
          useFactory: (dataSource: DataSource) => {
            const baseRepo = dataSource.getRepository(entity)
            return new Repository(
              baseRepo.target,
              baseRepo.manager,
              baseRepo.queryRunner,
            )
          },
          inject: [getDataSourceToken(token)],
        })
        return entity
      }
      return Repository
    })

    const forFeature = TypeOrmModule.forFeature(entities, token)

    return {
      module: TypeormModule,
      providers,
      imports: [forFeature],
      exports: [...providers, forFeature],
      global: true,
    }
  }

  public static forRoot(options: TypeOrmModuleOptions): DynamicModule {
    return {
      module: TypeormModule,
      providers: [],
      exports: [],
      imports: [TypeOrmModule.forRoot(options)],
      global: true,
    }
  }

  public static forRootAsync(options: TypeOrmModuleAsyncOptions): DynamicModule {
    return {
      module: TypeormModule,
      providers: [],
      exports: [],
      imports: [TypeOrmModule.forRootAsync(options)],
      global: true,
    }
  }
}
