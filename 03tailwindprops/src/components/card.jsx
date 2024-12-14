import React from 'react'

function card({username, post = 'Junior Developer'}) {
//   console.log('props: ', props)
//   console.log(username)

  return (
    <>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mt-8">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/15237516/pexels-photo-15237516/free-photo-of-raspberries-in-boxes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It's easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div className='text-sky-500 dark:text-sky-400'>
              {username}
            </div>
            <div>
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default card
