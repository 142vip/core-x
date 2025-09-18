import path from 'node:path'

export const healthProto = path.join(__dirname, '../protos/health.proto')
export const testProto = path.join(__dirname, '../protos/test.proto')
export const exampleProto = path.join(__dirname, '../protos/example.proto')

export const protos = [healthProto, testProto, exampleProto]

// health.proto
export const healthProtoServicePath = 'vip.grpc.health.v1.Health' as string
export const healthProtoPackageName = 'vip.grpc.health.v1' as string
export const healthProtoServiceName = 'Health' as string

// example.proto
export const exampleProtoServicePath = 'vip.grpc.example.v1.Example' as string
export const exampleProtoPackageName = 'vip.grpc.example.v1' as string
export const exampleProtoServiceName = 'Example' as string

// test.proto
export const testProtoSimpleServicePath = 'vip.grpc.test.v1.SimpleService' as string
export const testProtoStreamServicePath = 'vip.grpc.test.v1.StreamService' as string
export const testProtoPackageName = 'vip.grpc.test.v1' as string
export const testProtoSimpleServiceName = 'SimpleService' as string
export const testProtoStreamServiceName = 'StreamService' as string
