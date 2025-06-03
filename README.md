This is a repro of tsgo paniccing. Although I've attempted to make it as concise as possible, there may be ways to make it even simpler.

Switching between the commented out imports in `src/components/view-one.tsx` will either give no typeerrors or inducing the panic, depending on which import you use for `fooBaz`.
