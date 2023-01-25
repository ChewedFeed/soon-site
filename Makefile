SERVICE_NAME=comingsoon
GIT_COMMIT=`git rev-parse --short HEAD`
-include .env
export

.PHONY: build-images
build-images:
	nerdctl build --platform=arm64,amd64 --tag containers.chewedfeed.com/chewedfeed/${SERVICE_NAME}:${GIT_COMMIT} -f ./k8s/Containerfile .
	nerdctl tag containers.chewedfeed.com/chewedfeed/${SERVICE_NAME}:${GIT_COMMIT} containers.chewedfeed.com/chewedfeed/${SERVICE_NAME}:latest

.PHONY: publish-images
publish-images:
	nerdctl push containers.chewedfeed.com/chewedfeed/${SERVICE_NAME}:${GIT_COMMIT} --all-platforms
	nerdctl push containers.chewedfeed.com/chewedfeed/${SERVICE_NAME}:latest --all-platforms

.PHONY: tag-library
tag-library:
	nerdctl tag containers.chewedfeed.com/chewedfeed/${SERVICE_NAME}:${GIT_COMMIT} containers.chewedfeed.com/library/chewedfeed_soon:${GIT_COMMIT}
	nerdctl tag containers.chewedfeed.com/chewedfeed/${SERVICE_NAME}:${GIT_COMMIT} containers.chewedfeed.com/library/chewedfeed_soon:latest

.PHONY: publish-library
publish-library:
	nerdctl push containers.chewedfeed.com/library/chewedfeed_soon:${GIT_COMMIT} --all-platforms
	nerdctl push containers.chewedfeed.com/library/chewedfeed_soon:latest --all-platforms

.PHONY: build
build: build-images publish-images tag-library publish-library
