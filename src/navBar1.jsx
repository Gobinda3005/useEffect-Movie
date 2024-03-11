import React from 'react'

export const Bar = () => {
  return (
    <div>
        <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
           <div class="bg-dark p-4">
              <h5 class="text-body-emphasis h4">About Us</h5>
              <span class="text-body-secondary">This movie search bar provides a diverse selection of multilingual films, ensuring you find the perfect weekend entertainment regardless of your language preferences. Whether you're in the mood for action, romance, comedy, or drama, this platform offers a wide range of options to suit your taste. With such a varied collection, you're sure to discover new favorites and enjoy a satisfying weekend viewing experience.</span>
            </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    </div>
  )
}
