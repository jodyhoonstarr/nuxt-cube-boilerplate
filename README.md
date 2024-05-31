# nuxt-cube-boilerplate

A testing ground for figuring out how cube fits into a nuxt pnpm monorepo

> Note this is set to run in node16 compat due to me being production locked on RHEL7

Links:

- [nuxt 3 monorepo setup](https://serko.dev/post/nuxt-3-monorepo) - copy saved in `reference/nuxt-3-monorerpo`
- [cube boilerplate](https://github.com/Set-Creative-Studio/cube-boilerplate)
- [html kitchen sink](https://codepen.io/chriscoyier/pen/JpLzjd)

## Test the cube setup

```shell
# install deps
pnpm i

# cube demo page
pnpm --filter @test-monorepo/cube dev

# kitchen sink importing cube
pnpm --filter @test-monorepo/kitchen-sink dev
```

## FAQ

Why not use the @nuxtjs/tailwind module?

> The packages/cube module, following the CUBE boilerplate, uses some of the tailwind build chain under the hood. It was not clear how to use these from within the @nuxtjs/tailwindcss package. The vanilla versions are preferred so not to introduce version compatibility issues between the tailwindcss package and the nuxt module.
