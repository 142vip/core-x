#
# - 功能: 构建@142vip/core-x站点镜像
# - 参数:
#   CONTAINER_BUILD: 采用容器构建
#   NEED_PROXY: 是否需要代理
#   APP_VERSION: 版本
#

FROM registry.cn-hangzhou.aliyuncs.com/142vip/node:20.17.0-alpine AS build_base


# 是否
ARG NEED_PROXY=false

## 设置环境变量，支持容器构建时使用layer缓存，参考：https://pnpm.io/zh/docker
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /core-x
COPY . .

## 基于容器自动构建
RUN --mount=type=cache,id=pnpm,target=/pnpm/store if [ "$CONTAINER_BUILD" = "true" ]; then  \
    sh ./scripts/ci && pnpm build:docs; \
  fi;

FROM registry.cn-hangzhou.aliyuncs.com/142vip/nginx:1.23.0-alpine

## 自定义镜像的Label信息
ARG APP_NAME
ARG APP_VERSION
ARG APP_DESCRIPTION
ARG AUTHOR
ARG EMAIL
ARG HOME_PAGE
ARG GIT_HASH

# 作者信息 & 项目信息 & Git信息
LABEL "maintainer"="$AUTHOR <$EMAIL>"
LABEL "repo.name"=$APP_NAME "repo.version"=$APP_VERSION  \
      "repo.description"="$DESCRIPTION" "repo.homePage"="$HOME_PAGE"
LABEL "git.hash"="$GIT_HASH"

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面 注意：--from参数
COPY  --from=build_base /core-x/dist/  /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/
