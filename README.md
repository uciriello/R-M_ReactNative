Per fare la build del progetto fare prima il bundle del progetto di React Native.

Con il terminale andare nella root di progetto ed eseguire il comando

```
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
```

Se non hai installato globalmente react-native come comando eseguire lo stesso comando con `npx` davanti.

Per ottenere l'apk hai due opzioni:

1. Andare su Android Studio e ottenere l'apk dall'IDE
2. Eseguire il comando `sudo ./gradlew assembleDebug` nella cartella Android ( dare i permessi al file gradlew tramite comando `chmod u+x`)
