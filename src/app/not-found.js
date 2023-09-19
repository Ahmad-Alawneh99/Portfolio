import sharedStyles from './shared.module.scss'

export default function Render404() {
  return (
		<main className={sharedStyles.main}>
			<h1>404!</h1>
            <h3>The requested page could not be found!</h3>
		</main>
	)
}
