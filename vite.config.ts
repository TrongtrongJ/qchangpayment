import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import VitePages from 'vite-plugin-pages';
import ViteComponents from 'unplugin-vue-components/vite';
import ViteFont from 'vite-plugin-fonts';
import PurgeIcons from 'vite-plugin-purge-icons';
import { imagetools } from 'vite-imagetools';
import ImageMin from 'vite-plugin-imagemin';
import { vueI18n } from '@intlify/vite-plugin-vue-i18n';
import purgecss from 'rollup-plugin-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: 'public',
	logLevel: 'info',
	root: process.cwd(),
	base: '/',
	optimizeDeps: {
		include: [ '@iconify/iconify', '@vueuse/core', '@vueuse/head', 'nprogress', 'notyf', 'vue' ]
	},
	plugins: [
		vue({
			include: [ /\.vue$/ ]
		}),
		VitePages({
			dirs: [ { dir: 'src/pages', baseRoute: '' } ]
		}),
		ViteComponents({ dirs: [ 'src/components' ] }),
		ViteFont({
			google: {
				families: [
					{
						name: 'Prompt',
						styles: 'wght@400;600;700;800;900'
					},
					{
						name: 'Sarabun',
						styles: 'wght@400;600;700;800;900'
					},
					{
						name: 'Roboto',
						styles: 'wght@300;400;500;600;700'
					}
				]
			}
		}),
		vueI18n({
			include: path.resolve(__dirname, './src/locales/**')
		}),
		PurgeIcons(),
		imagetools(),
		ImageMin({
			gifsicle: {
				optimizationLevel: 3,
				interlaced: false
			},
			optipng: {
				optimizationLevel: 3
			},
			mozjpeg: {
				quality: 90
			},
			pngquant: {
				quality: [ 0.8, 1 ],
				speed: 4
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
						active: false
					},
					{
						name: 'removeEmptyAttrs',
						active: false
					}
				]
			}
		}),
		purgecss({
			content: [ `./src/**/*.vue` ],
			variables: false,
			safelist: {
				standard: [
					/(autv|lnil|lnir|fas?)/,
					/-(leave|enter|appear)(|-(to|from|active))$/,
					/^(?!(|.*?:)cursor-move).+-move$/,
					/^router-link(|-exact)-active$/,
					/data-v-.*/
				]
			},
			defaultExtractor(content) {
				const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
				return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
			}
		})
	],
	resolve: {
		alias: [
			{
				find: '~',
				replacement: `/src/assets`
			},
			{
				find: '@src',
				replacement: `/src`
			},
			{
				find: '@state',
				replacement: `/src/state`
			},
			{
				find: '@data',
				replacement: `/src/data`
			},
			{
				find: '@utils',
				replacement: `/src/utils`
			},
			{
				find: '@components',
				replacement: `/src/components`
			}
		]
	}
});
