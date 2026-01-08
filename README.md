# no-base-to-string-repro

Steps to reproduce:

- install dependencies

    ```shell
    pnpm install
    ```

- lint the project

    ```shell
    pnpm lint
    ```

Note the issue:

```
./src/main.ts
  6:15  error  'Helpers' will use Object's default stringification format ('[object Object]') when stringified  @typescript-eslint/no-base-to-string

✖ 1 problem (1 error, 0 warnings)
```

Interestingly, if the `toString` function does not use overloads (delete lines 3
and 4 in `helpers.ts` then the error goes away. So it seems that the function
overloads are tricking some logic that should already detect this case as valid.
