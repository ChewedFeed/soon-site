export default function ProgressBar({progress}) {
  if (progress === 0 || progress === undefined) {
    progress = 1
  }

  return (
    <>
      <section className="progress">
        <div id="progressbar" style={{width: progress +'%'}}></div>
        <h2 id="progressAmount">{progress}%</h2>
      </section>
    </>
  )
}
