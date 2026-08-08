# Шаблон стилей проекта

## Основные правила

- Для компонентов использовать `*.module.scss`.
- Не использовать SCSS-переменные и отдельный файл токенов.
- Значения писать непосредственно в свойствах.
- Классы именовать в `camelCase`: `.videoInfo`, `.playButton`, `.footerText`.
- `line-height` писать без процентов: `1`, `1.2`, `1.5`.
- Media query располагать в конце файла от большей ширины к меньшей.
- Использовать единый набор breakpoint: `1200px`, `1024px`, `768px`, `600px`, `576px`, `425px`, `375px`.
- Фиксированные размеры из макета писать в `px`.
- `width: 100%` использовать только для заполнения доступной ширины родителя.
- Не добавлять лишние обёртки, если расположение можно задать существующему элементу.
- Для интерактивных элементов обязательно добавлять `:focus-visible`.
- Если есть анимация, отключать её через `prefers-reduced-motion`.

## Порядок свойств

Придерживаться одного порядка:

1. Позиционирование.
2. Отображение и размеры.
3. Отступы и flex/grid.
4. Границы, фон и тени.
5. Текст.
6. Анимации.

## Шаблон SCSS

```scss
.component {
	position: relative;

	display: flex;
	width: 100%;
	max-width: 400px;
	min-height: 300px;
	padding: 24px;
	align-items: center;
	justify-content: center;
	gap: 16px;

	border: 1px solid rgb(0 0 0 / 20%);
	border-radius: 4px;
	background: #fff;

	color: #342f45;
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;
}

.component:focus-visible {
	outline: 2px solid #000;
	outline-offset: 3px;
}

@media (max-width: 768px) {
	.component {
		padding: 20px;
	}
}

@media (max-width: 425px) {
	.component {
		padding: 16px;
		font-size: 14px;
	}
}

@media (prefers-reduced-motion: reduce) {
	.component {
		transition: none;
	}
}
```

## Шаблон компонента

```text
src/components/ComponentName/
├── ComponentName.tsx
├── ComponentName.module.scss
└── index.ts
```

```tsx
import type { ReactNode } from 'react';

import styles from './ComponentName.module.scss';

type TComponentNameProps = {
	children: ReactNode;
};

function ComponentName({ children }: TComponentNameProps) {
	return <section className={styles.component}>{children}</section>;
}

export default ComponentName;
```

```ts
export { default } from './ComponentName';
```
