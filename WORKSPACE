workspace(name = "friends", managed_directories = {"@npm": ["node_modules"]})

load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

git_repository(
    name = "io_bazel_rules_dotnet",
    remote = "https://github.com/bazelbuild/rules_dotnet",
    commit = "e37a6053726e6b0a6a204489c70809739dae8f50",
)

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "591d2945b09ecc89fde53e56dd54cfac93322df3bc9d4747cb897ce67ba8cdbf",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/1.2.0/rules_nodejs-1.2.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

load("@npm_bazel_karma//:package.bzl", "rules_karma_dependencies")

rules_karma_dependencies()

# Setup the rules_webtesting toolchain
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@io_bazel_rules_dotnet//dotnet:deps.bzl", "dotnet_repositories")

dotnet_repositories()

load(
    "@io_bazel_rules_dotnet//dotnet:defs.bzl",
    "DEFAULT_DOTNET_CORE_FRAMEWORK",
    "DOTNET_CORE_FRAMEWORKS",
    "DOTNET_NET_FRAMEWORKS",
    "core_register_sdk",
    "dotnet_register_toolchains",
    "dotnet_repositories_nugets",
    "mono_register_sdk",
    "net_gac4",
    "net_register_sdk",
    "nuget_package"
)

dotnet_register_toolchains()

dotnet_repositories_nugets()

core_register_sdk(
    DEFAULT_DOTNET_CORE_FRAMEWORK,
)

core_register_sdk(
    DEFAULT_DOTNET_CORE_FRAMEWORK,
    name = "core_sdk",
)
