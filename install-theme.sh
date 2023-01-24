rm -r ../../cards
rm -r ../../components
rm -r ../../styles
rm -r ../../pages/_app.tsx
rm -r ../../pages/index.tsx
rm -r ../../services/config/api-config.ts

cp -R * ../../
cp -R _app.tsx ../../pages
cp -R index.tsx ../../pages
cp -R api-config.ts ../../services/config

