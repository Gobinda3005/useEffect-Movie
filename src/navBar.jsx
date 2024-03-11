import React from 'react'

export const Nav = () => {
  return (
    <div>
        <div className='navBar'>
             <ul class="nav justify-content-center">
             <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="https://www.wikipedia.org/">Wikipedia</a>
             </li>
             <li class="nav-item">
             <a class="nav-link" href="https://www.google.com/webhp">Google Search</a>
             </li>
             <li class="nav-item">
             <a class="nav-link" href="https://www.imdb.com/">IMDb</a>
             </li>
             <li class="nav-item">
             <a class="nav-link disabled" aria-disabled="true">Report</a>
             </li>
             </ul>
        </div>
    </div>
  )
}
