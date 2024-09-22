/* eslint-disable react/prop-types */

export default function NewsItem({title , description , src , url}) {
  return (
    <div className="col-sm-6 col-md-4">
        <div className="card bg-dark text-light p-2 h-100">
            <img src={src} className="card-img" alt={title} />
            <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description ? description.slice(0,90) : "read more about this news !"}</p>
            <a href={url} className="btn btn-primary">Read more</a>
            </div>
        </div>
    </div>
  )
}
