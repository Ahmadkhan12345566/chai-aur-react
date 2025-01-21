import React from 'react'

function Card(props) {
    console.log(props)
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/30309178/pexels-photo-30309178/free-photo-of-vibrant-parrot-perched-on-a-balcony-railing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg f">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption>
        <div>
          { props.channel }
        </div>
        <div>
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
  )
}

export default Card