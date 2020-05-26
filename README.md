# Electron Boilerplate

A template of my electron application.

## Stack

- [x] [Electron Forge](https://www.electronforge.io/)
- [x] Electron
- [x] React
- [x] Typescript

## Guick Stater

```npm
yarn  install
```

run in your local.

```npm
yarn start
```

## Q & A

Please close your antivirus software just like 360 杀毒 before run `yarn package` or `yarn make` in terminal.

https://github.com/electron-userland/electron-forge/issues/1483#issuecomment-630519226

```text
An unhandled rejection has occurred inside Forge:
{ Error: spawn EPERM
    at ChildProcess.spawn (internal/child_process.js:366:11)
    at spawn (child_process.js:538:9)
    at Object.execFile (child_process.js:221:15)
    at unzip (D:\workspace\weaver-diagnosis\v2\node_modules\cross-zip\index.js:90:6)
    at Promise (internal/util.js:275:30)
    at new Promise (<anonymous>)
    at unzip (internal/util.js:274:12)
    at extractElectronZip (D:\workspace\weaver-diagnosis\v2\node_modules\electron-packager\src\unzip.js:30:10)
    at Packager.extractElectronZip (D:\workspace\weaver-diagnosis\v2\node_modules\electron-packager\src\index.js:72:11)
    at Packager.createApp (D:\workspace\weaver-diagnosis\v2\node_modules\electron-packager\src\index.js:88:16) errno: 'EPERM', code: 'EPERM', syscall: 'spawn' }

Electron Forge was terminated. Location:
{}
```
