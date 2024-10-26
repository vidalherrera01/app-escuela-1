#!/bin/bash
npx cap add android
ionic build
ionic capacitor sync android
ionic capacitor open android
