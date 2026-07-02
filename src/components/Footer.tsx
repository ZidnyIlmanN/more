'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="footer-dark">
      <div className="container-16">
        <div className="footer-wrapper">
          <Link href="/" className="footer-brand w-inline-block">
            <img
              src="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a2f144f41055e78b169206_More%20Logo%20-%20White.png"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, 621.0000610351562px"
              srcSet="https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a2f144f41055e78b169206_More%20Logo%20-%20White-p-500.png 500w, https://cdn.prod.website-files.com/67a2ef6361d99db53c30612d/67a2f144f41055e78b169206_More%20Logo%20-%20White.png 621w"
              alt="More Coffee & Space Logo"
              className="image-27"
            />
          </Link>
          <div className="footer-content">
            <div id="w-node-_751fe30e-cd1a-1fec-0c45-eefd31e1d44f-31e1d449" className="footer-block">
              <div className="title-small">CONTACT US</div>
              <a href="#" className="footer-link">morecoffeenspace@gmail.com</a>
              <a href="#" className="footer-link">Jl. Otto Iskandardinata No.115, RT.41/RW.11, Karanganyar, Kec. Subang, Kabupaten Subang, Jawa Barat 41211</a>
              <a href="#" className="footer-link">+62 823-1923-9641</a>
            </div>
            <div id="w-node-_751fe30e-cd1a-1fec-0c45-eefd31e1d458-31e1d449" className="footer-block">
              <div className="title-small">FOLLOW US</div>
              <a href="#" className="footer-link">Follow our social media for more information.</a>
              <div className="footer-social-block">
                <a href="https://www.instagram.com/kopimo.re/" className="footer-social-link w-inline-block" target="_blank" rel="noopener noreferrer">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFXklEQVR4nO2d3W8VRRiHt9SoNxZjUcIFQT5MjS0YgUo1KjUxwc8bopKWkHhD44UJCGgDwYBUE6/x666WhopUjSH+DQbjv6BikAstbemHCDERHzJ2Gmvpnp09Z2Z2Z+d9kk2a03P2nXd/Z+admXdmTpIIgiAIgiAIgiAIgiAIgrAkQBOwHngO6AP6S3b16bKpMjZVUkbgTmAXMApcJhzGgC+AV5QPSegA9wLvA1OEzxVgAFiRhAZwG7APmKF6XAWOA7cnIQCsBX6g+nwPrEnKDPB0RZqnPM3Y9qSMAC8B14mP68CLSZkAuiMVY56/gGeSEsWMGJqpX/WVxmThMUX3pqoewL8B1i3wWQ0Yz6W897x6JkUKcoDqi9G0hN/Laoiyr8hB3yzV5Z+FNWMJ/zekfG6mkMGjHoFXmYsGzyAtpgz4UeH/c1NVD+QXDZ7DpRoB/g4/aswV5FXiYH2NZ/BAxmdf9inIWeLgnArgKUH924zPfu4znxHSFLoNUTYsqhlZYih+95JP0f3wonMUo8AR1SwATwFb9LVdv6b+96XlL86lGjEjjbU+BHmeYibxTgKdeb51ujZvAz4qqBPyrFs15px83bMQ/cBdFsrdAhz2LEyfnade27G3PDkzDNznoPwrgdOefDhku/xLOXTMsROzQK8HP/YAfzj25VjiwRGVvnQZsDc7d+I/X7Zom644HrIgY0Cbcwdu9afNYTc+WEFmfdaMxQBb9eIF2wQrSG+duZjHgd3Am/pSfz9WT05CxxTbBCnIcE77DwOn9AReGhP6PZty3nskdkGumHZtgRW6K3wjx/3Ve4eA1hxd4qmYBek3tNkBXGjAzk9Au6EtNe0SpSCqdrQYijFjwd60iSjAcou1JChBThrYatXfblv8olLPBnY/jlGQTgNbw9hnyMBuV2yCjGXN2gKbcgZwU9Q9HzGYJR6PSZCzBnZO4Y7PDOyrfEo0ghwxGPRN4I6JrMEj8E5MgtRcAMDcCNw1XR4WcgQjyJMZNnbjnh6DBeTRCJIVVA/hnoMZZdhswUZlBDmIew5klCEqQbKarF7csyujDFE1WRLUA+v2NlsamKUh3d5FjBoIP+RQkEED+1/F1GRdNpg62Qj8jX3UPTsybC+LbepEsa2gWjJoYNfWwDQoQT40sHUP8CP2uGCyuwn4NEZBpgwTVO06ueQrQXW3JXvBCaI4bGizHfi5ATsqyfWQoa2jFv0LThBVS1Ya2m3VMeVGzgA+qJo+QxurLB+YE5wgitM57W9U+YyM6flx/Z6OnPc+Y9m3IAVR7KmjHM061dqzYKFcj94P0lzH/V5z4FewgqhV6FudFz7dp0eBPx34Fawg84PFNucO3OrPg7LYOp1JtTbXoxidVdiO4HrDztV6YkqdMcNFM+V9w46vLW0jpl3inOVf5aA3VeiWNp+bPqf0WtsWC+Vergd9tkbhpdn0qQ4Z9s20Xt7ZtdTJChmztmqi8BPPQsyzw60ac06uo1jGda7iqF6q073g4IBu/Zr639eO13aZcL8PQZr0sRFCGY7W0KKo47eF2ox4ESOy45kaYafvA8zUhhuhDAeYaVHeSymMgIcResomzCoett8o06b5Fxei7G+4+NXjjULEWLCPQx0eLMzxXT25GNuirJEA/y9qELo6KQP6OAvXM6dl5lrWAnLvRPxzFdeAF5Iyog+krHUGSRWbqSeSMqNjyvlIAvjqJAT0tHdfRccp0/oHz4rtTTUweByoSDM2Cbxb2KDPJmpeRx9wfCawqfvfdCp5p/e5KV/ofIr6maQdwF7gbeAE8EHB1wldlr26bO5PpRYEQRAEQRAEQRAEQRCEJFxuAn852MVcPaxkAAAAAElFTkSuQmCC" alt="Instagram" className="img-7" />
                </a>
                <a href="#" className="footer-social-link w-inline-block">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADrklEQVR4nO2dS2wNURyHxytIqFYTEmJBtFFlJWm9NhI7YeXRisTKAkGKhIRFExsRew2licRGEBG2YtuIBeKRCisiii6KJtIbn5zkNC1p75zbO/fMmZnfl8zunrn/mW/OzJzX/KNICCGEEEIIIYQQQogCA8wCNgL7gS7gTE62LntM7eYYo9AB1gF9wDfyz1fgBtAahQaw2AZXoniUgF6gPgoBYDXwJu2zEgDvgJa0ZawBhtI+EwHxHWhO8zY1kPYZCJC3QEMaQszDW0zOVd8y1hf0Ae5Kyevbl2qHE9d9NvrMO7goj2mLzfYhZFNMIGKcdh9CTNeBcKPDh5DTjsEIOOlDSLfOtDPdEhIWEhIYEhIYhRayIWa7k0JMxRUSxcd9LIWwJGQqgEbgh4R4InIAOCshYQmZCTzwKEW3rDiAecAjCakxUQWYXljgEvCnxmGphlQCsAV4KiE1IKp+SKEWQ9KqIdMF2CMhCRJViYQkTCQhYRFJSFhE8bekshMOdMvyL6TPdozOlZAwhNy2P30PnADqVEOSYQT4VIWQMX4CD4HjwA67ICdpctkO+QXcsvf4RhtDawJCfJArISXgGrB8khgkxLOQIWB7mYtCQjwK+Qg0xdRSCfEkZARoc7htSognIYfiZEiIPyEvXNd+q4b4EbLbRYaE+KkhppE233EJ9hVbm/7BoazaIRVwz3G4dXiqHUhIslxwmJTwodwOJCRZjsQI2Ry3AwlJlgMxQnbFlP/tIOQ+/slsX1bZpV9AU0z5Zw5x9+OfzAq5XOUV3ulQ3nTJ+CazQvod/rcBePxfuVHgvEPZlaRDZoWYKZ3LHP57BrANOGVeBIBVjjGbL8GlQWaF4HKlTwc74/056ZBpIcPA0hrEe5D0yLQQw82EY12S0sM8N0IS+/oBMAd4QrrkQkgJOFpljAs9r5TKtZAxeoAF04ivBXhJGORKiOEzcNixa36FlWjaJqGQOyETx0vu2rbHTjPuDmwF9gHnbLdIrZenTYfcCskqEhIYEhIYElJEIaZjT7jR5UNIp2MwAvb6EGIStQg32nx9SHnQMaAi88VbFh6bvEWUp9eLjAl5Q0LqoggN00G61psQK8Wk+RGT0+NVhhVSB7yaIqCiJ3Sp9y7ESmm2aX7EeEaEsqu/fEgxM9Jf24CKzIB5tkYhYKqoSfNT0Kw7o3YcZlEUGubNwmSWKUg7ZdC+2KSbKq+CxqNJT9phJ6ldzMnWZY+pLROpV4UQQgghhBBCCCGEiGrHX/JcFXn9H+4bAAAAAElFTkSuQmCC" alt="TikTok" />
                </a>
                <a href="#" className="footer-social-link w-inline-block">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFq0lEQVR4nO2dW4ydUxTHvxpGKZLePKDaiJYH4g1Bm5ApSaVuoSHCA2ld6tK6JDxQiYQQyrRKpnVJGvFQUXdVPFGRCL3Q8lBG69Bo6JiRNjHtdH6yM6s6bebMd5m99uWc/UvmZWbO2Wt///N9e+29LifLEolEIpFIJBKJRCKRSCRKAZwIXAbcAywDPgO+A34GuoBe+emS35m/fSr/ezdwKTAxXfaKAMcCVwLtcnH7GTnmPTYBzwNXAMckgYYX4QjgIqAD6EEfM8ZKYDbQksQ5KMRo4E6gE3+Yx9wdwNHN/lh6ANhBOOwA7jO2Zc2EPCZ+IVxqwLVZowNMAd4nHt4FTs0aEeAqcUtjoweYkzUKZqEU9zV2OqJf9IHxwFc0DuuAcVmMACfJpq7R+AGYlMUEcCbwK43LduCMLAaAk4FtND6/AZOzCNYMc0s3C1uCXVPEm2qkBbwoXwbpfQEv0Ly0ZyFhjhl8X5EAuCYL6Dik2/fVCIC/g1jkgfd8X4mAeCeE86nEocz2Gc9ohv1GWTq9hIcluGQ7arcIuB64DpgXsRu9wEfY1Wakby0wps5d6DO0O5JdvLu9icTAbfHNUGIcALiVOLktc5gdYutTuyfvkI6BuyTGwNZPwCgXglxs0eiHC465mDiZ4UKQVy0Zuxs4vuCY0ywly7lmhbYY5vHxjyVjV5Uc+xPio1vVBZb0Ti+uIfFuQi/XFMRmssKskmO3RBqFfFZTEJsx8gsqjL+I+NigWRJgc2G9pIINs4iP/cAEDUFMfYZNbqhgwwriZKaGIKZYxibPlBz/XGAfcXKXhiCmGskm60tmstSIl6UagpgSMdtMK7j32UDcrNUQ5HsfLiHwKPGzSUMQjXoOs+sfnzPuHOKnU0OQXUrGvlhg7I+Imz81BDFlxxr0AefkjD3JUSGoFv9qCKLpcn4LtOaMfzPxoiKIrVPeejxZwIZYC39UHlk7lY3uA6bn2HAk8CHxobKob3Zg+LYCXpdJsFhDXKi4vSYzxAVrTNy+gChvVXjvv4AnTIah3JFRbwxfdjiBpwrYMwp4qMSF3Wtadwx6/VSZk5b3OJglGoKYDgcumVfQrraCgat767z+FOA5ifFrMV9DkJm4ZZ8J2xa0bQzwtNwFQ7GywHtMAB5XSjlqsyLCEAa7zvzoNa2UStg42ZysSr7XAT4vk0UInAA8ZnHftT/PUamMpzLnXpNcUdLOiSbnS/YtYz2vmYXDDFWMXIIf+uqtAYpzbfcRiPMdxi3LS2ZzqDbBQ+f6to/smrJGtkrplu/2FlPVJnlwrqY5wEgx12q0tqGv4Z895hGWt4EcwRzPsmTncg37Djf2QsJhHXC+whxft2TfsGdzsZ1rleGDKnledeb2IHbY6qQcQYy+hTD5UWLwp1fsRGErs7/wSYPNxT30PNuvgYV5teNSgHST5dK5mvN2G9JWNaaavzelUNUUk94oTsErwO8K4zndMw0OFjVT558ypWy6ru4wophPW8LVRjDgo5RQWe1NDBHEeDWJAbq89mKUo+7EACYscbU3MUSQuWJMAhZ7FUMEWZWU+D8A1upbjBbFXN+Y2BxEE0zgPN9XIgBqwTTqBx6hudlepNjIGcAXNC9bgmo1LlkZ9dJtmmEBH5uFRMQtLka6z2j37k05qsYNnR7TcjALFYmENQurg1ovDgc4zdJEdwf27WxDHaH7O7UtCnA71dgrnplJ0ZwOHCVRx/mBCVOTwJWfeEZZ5BYuughuNHXo0jDmuJxaj7meT463SmwnvEU7J0LYnXObd0hdeekvApZ6jxmSaOCi4tYksS2XO9ZNdohyPtYfwBvSxnWK5bFaJW11mZwX9VvKQl8/6K6N47FUD+B++VLIBcDZLj9VwDipT1koLZo+llYfOyUw1C9Z8rukQ/ZGKcFbKutUm1pJQCKRSCQSiUQikUgkEomscfkPIs9ZxfOatesAAAAASUVORK5CYII=" alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright-center">Copyright © 2025 MORE Coffee & Space</div>
    </section>
  );
}
