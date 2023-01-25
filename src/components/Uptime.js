export default function Uptime({status}) {
  if (status === undefined || status === null || status === "" || status === "unknown") {
    return null
  }

  return (
    <>
      <div className="more_info">
        <a href={status} className="button">Services Status</a>
      </div>
    </>
  )
}
