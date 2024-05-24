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
