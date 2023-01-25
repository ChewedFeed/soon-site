import React from 'react';
import ReactMarkdown from "react-markdown";

export default function Description({description, fullDesc}) {
console.log('description', description)
console.log('fullDesc', fullDesc)

  return (
    <section className="description">
      <div className="description_top"></div>
      <div className="description_content">
        <ReactMarkdown children={fullDesc} />
      </div>
      <div className="description_bottom"></div>
    </section>
  )
}
