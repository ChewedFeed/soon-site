import MarkdownView from 'react-showdown';

export default function Description({description, fullDesc}) {


  return (
    <section className="description">
      <div className="description_top"></div>
      <div className="description_content" id="fullDesc">
        <MarkdownView markdown={fullDesc} />
      </div>
      <div className="description_bottom"></div>
    </section>
  )
}
