# sentry-expo-bare-sample-app

This is simple app example to show how sentry-expo works in bare workflow.

## How this app was created?

The process is simple, create initial app, install `sentry-expo` and additional modules. Then add `Sentry.init` to your app and if you want source maps add `postPublishHook`.

```bash
npx create-expo-app --template bare-minimum

npx expo install sentry-expo
npx expo install expo-application expo-constants expo-device expo-updates @sentry/react-native
```
