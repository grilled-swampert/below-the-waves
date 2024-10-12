import "./Header.css";

export const Header = () => {
  return (
    <header class="header-wrapper" role="banner">
      <div class="header-inner">
        <a
          class="logo"
          id="logo"
          href="http://localhost:3000/"
          aria-label="Below The Waves"
        >
          <svg
            width="321"
            height="31"
            viewBox="0 0 321 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_343_894)">
              <path
                d="M22.52 9.2C22.2267 10.8533 21.5333 12.2267 20.44 13.32C19.3733 14.3867 18.0667 15.16 16.52 15.64C17.8267 15.8533 18.8933 16.4933 19.72 17.56C20.5467 18.6 20.96 19.84 20.96 21.28C20.96 21.7067 20.92 22.12 20.84 22.52C20.6 23.9333 20.0133 25.2133 19.08 26.36C18.1733 27.48 16.9733 28.3733 15.48 29.04C13.9867 29.68 12.3067 30 10.44 30H0.04L5 2.12H15C17.5067 2.12 19.4 2.65333 20.68 3.72C21.9867 4.78667 22.64 6.17333 22.64 7.88C22.64 8.30667 22.6 8.74667 22.52 9.2ZM18.76 9.64C18.8133 9.4 18.84 9.06667 18.84 8.64C18.84 7.49333 18.44 6.6 17.64 5.96C16.84 5.32 15.68 5 14.16 5H8.12L6.48 14.24H12.6C14.28 14.24 15.6667 13.84 16.76 13.04C17.8533 12.2133 18.52 11.08 18.76 9.64ZM17.24 22.16C17.32 21.7867 17.36 21.44 17.36 21.12C17.36 19.8933 16.9067 18.92 16 18.2C15.0933 17.48 13.8533 17.12 12.28 17.12H5.96L4.2 27.12H10.64C12.4267 27.12 13.9067 26.68 15.08 25.8C16.2533 24.92 16.9733 23.7067 17.24 22.16ZM46.6113 18.2C46.6113 18.8933 46.5713 19.6267 46.4913 20.4H28.9713C29.1046 22.56 29.8379 24.2533 31.1713 25.48C32.5313 26.68 34.1713 27.28 36.0913 27.28C37.6646 27.28 38.9713 26.92 40.0113 26.2C41.0779 25.4533 41.8246 24.4667 42.2513 23.24H46.1713C45.5846 25.3467 44.4113 27.0667 42.6513 28.4C40.8913 29.7067 38.7046 30.36 36.0913 30.36C34.0113 30.36 32.1446 29.8933 30.4913 28.96C28.8646 28.0267 27.5846 26.7067 26.6513 25C25.7179 23.2667 25.2513 21.2667 25.2513 19C25.2513 16.7333 25.7046 14.7467 26.6113 13.04C27.5179 11.3333 28.7846 10.0267 30.4113 9.12C32.0646 8.18667 33.9579 7.72 36.0913 7.72C38.1713 7.72 40.0113 8.17333 41.6113 9.08C43.2113 9.98667 44.4379 11.24 45.2913 12.84C46.1713 14.4133 46.6113 16.2 46.6113 18.2ZM42.8513 17.44C42.8513 16.0533 42.5446 14.8667 41.9313 13.88C41.3179 12.8667 40.4779 12.1067 39.4113 11.6C38.3713 11.0667 37.2113 10.8 35.9313 10.8C34.0913 10.8 32.5179 11.3867 31.2113 12.56C29.9313 13.7333 29.1979 15.36 29.0113 17.44H42.8513ZM55.0559 0.4V30H51.4159V0.4H55.0559ZM70.8197 30.36C68.7664 30.36 66.8997 29.8933 65.2197 28.96C63.5664 28.0267 62.2597 26.7067 61.2997 25C60.3664 23.2667 59.8997 21.2667 59.8997 19C59.8997 16.76 60.3797 14.7867 61.3397 13.08C62.3264 11.3467 63.6597 10.0267 65.3397 9.12C67.0197 8.18667 68.8997 7.72 70.9797 7.72C73.0597 7.72 74.9397 8.18667 76.6197 9.12C78.2997 10.0267 79.6197 11.3333 80.5797 13.04C81.5664 14.7467 82.0597 16.7333 82.0597 19C82.0597 21.2667 81.553 23.2667 80.5397 25C79.553 26.7067 78.2064 28.0267 76.4997 28.96C74.793 29.8933 72.8997 30.36 70.8197 30.36ZM70.8197 27.16C72.1264 27.16 73.353 26.8533 74.4997 26.24C75.6464 25.6267 76.5664 24.7067 77.2597 23.48C77.9797 22.2533 78.3397 20.76 78.3397 19C78.3397 17.24 77.993 15.7467 77.2997 14.52C76.6064 13.2933 75.6997 12.3867 74.5797 11.8C73.4597 11.1867 72.2464 10.88 70.9397 10.88C69.6064 10.88 68.3797 11.1867 67.2597 11.8C66.1664 12.3867 65.2864 13.2933 64.6197 14.52C63.953 15.7467 63.6197 17.24 63.6197 19C63.6197 20.7867 63.9397 22.2933 64.5797 23.52C65.2464 24.7467 66.1264 25.6667 67.2197 26.28C68.313 26.8667 69.513 27.16 70.8197 27.16ZM116.046 8.08L109.206 30H105.446L100.166 12.6L94.8856 30H91.1256L84.2456 8.08H87.9656L93.0056 26.48L98.4456 8.08H102.166L107.486 26.52L112.446 8.08H116.046ZM139.698 2.12L139.178 4.96H131.578L127.178 30H123.538L127.938 4.96H120.338L120.858 2.12H139.698ZM152.179 7.68C153.832 7.68 155.325 8.04 156.659 8.76C157.992 9.45333 159.032 10.5067 159.779 11.92C160.552 13.3333 160.939 15.0533 160.939 17.08V30H157.339V17.6C157.339 15.4133 156.792 13.7467 155.699 12.6C154.605 11.4267 153.112 10.84 151.219 10.84C149.299 10.84 147.765 11.44 146.619 12.64C145.499 13.84 144.939 15.5867 144.939 17.88V30H141.299V0.4H144.939V11.2C145.659 10.08 146.645 9.21333 147.899 8.6C149.179 7.98667 150.605 7.68 152.179 7.68ZM186.885 18.2C186.885 18.8933 186.845 19.6267 186.765 20.4H169.245C169.378 22.56 170.111 24.2533 171.445 25.48C172.805 26.68 174.445 27.28 176.365 27.28C177.938 27.28 179.245 26.92 180.285 26.2C181.351 25.4533 182.098 24.4667 182.525 23.24H186.445C185.858 25.3467 184.685 27.0667 182.925 28.4C181.165 29.7067 178.978 30.36 176.365 30.36C174.285 30.36 172.418 29.8933 170.765 28.96C169.138 28.0267 167.858 26.7067 166.925 25C165.991 23.2667 165.525 21.2667 165.525 19C165.525 16.7333 165.978 14.7467 166.885 13.04C167.791 11.3333 169.058 10.0267 170.685 9.12C172.338 8.18667 174.231 7.72 176.365 7.72C178.445 7.72 180.285 8.17333 181.885 9.08C183.485 9.98667 184.711 11.24 185.565 12.84C186.445 14.4133 186.885 16.2 186.885 18.2ZM183.125 17.44C183.125 16.0533 182.818 14.8667 182.205 13.88C181.591 12.8667 180.751 12.1067 179.685 11.6C178.645 11.0667 177.485 10.8 176.205 10.8C174.365 10.8 172.791 11.3867 171.485 12.56C170.205 13.7333 169.471 15.36 169.285 17.44H183.125ZM229.609 2.12L216.609 30H212.529L210.009 7.56L199.369 30L195.289 30.04L192.409 2.12H196.329L198.249 25.68L209.089 2.12H213.209L215.449 25.6L225.689 2.12H229.609ZM229.353 18.96C229.353 16.72 229.806 14.76 230.713 13.08C231.619 11.3733 232.859 10.0533 234.433 9.12C236.033 8.18667 237.806 7.72 239.753 7.72C241.673 7.72 243.339 8.13333 244.753 8.96C246.166 9.78667 247.219 10.8267 247.913 12.08V8.08H251.593V30H247.913V25.92C247.193 27.2 246.113 28.2667 244.673 29.12C243.259 29.9467 241.606 30.36 239.713 30.36C237.766 30.36 236.006 29.88 234.433 28.92C232.859 27.96 231.619 26.6133 230.713 24.88C229.806 23.1467 229.353 21.1733 229.353 18.96ZM247.913 19C247.913 17.3467 247.579 15.9067 246.913 14.68C246.246 13.4533 245.339 12.52 244.193 11.88C243.073 11.2133 241.833 10.88 240.473 10.88C239.113 10.88 237.873 11.2 236.753 11.84C235.633 12.48 234.739 13.4133 234.073 14.64C233.406 15.8667 233.073 17.3067 233.073 18.96C233.073 20.64 233.406 22.1067 234.073 23.36C234.739 24.5867 235.633 25.5333 236.753 26.2C237.873 26.84 239.113 27.16 240.473 27.16C241.833 27.16 243.073 26.84 244.193 26.2C245.339 25.5333 246.246 24.5867 246.913 23.36C247.579 22.1067 247.913 20.6533 247.913 19ZM265.904 26.64L272.704 8.08H276.584L267.984 30H263.744L255.144 8.08H259.064L265.904 26.64ZM300.166 18.2C300.166 18.8933 300.126 19.6267 300.046 20.4H282.526C282.659 22.56 283.393 24.2533 284.726 25.48C286.086 26.68 287.726 27.28 289.646 27.28C291.219 27.28 292.526 26.92 293.566 26.2C294.633 25.4533 295.379 24.4667 295.806 23.24H299.726C299.139 25.3467 297.966 27.0667 296.206 28.4C294.446 29.7067 292.259 30.36 289.646 30.36C287.566 30.36 285.699 29.8933 284.046 28.96C282.419 28.0267 281.139 26.7067 280.206 25C279.273 23.2667 278.806 21.2667 278.806 19C278.806 16.7333 279.259 14.7467 280.166 13.04C281.073 11.3333 282.339 10.0267 283.966 9.12C285.619 8.18667 287.513 7.72 289.646 7.72C291.726 7.72 293.566 8.17333 295.166 9.08C296.766 9.98667 297.993 11.24 298.846 12.84C299.726 14.4133 300.166 16.2 300.166 18.2ZM296.406 17.44C296.406 16.0533 296.099 14.8667 295.486 13.88C294.873 12.8667 294.033 12.1067 292.966 11.6C291.926 11.0667 290.766 10.8 289.486 10.8C287.646 10.8 286.073 11.3867 284.766 12.56C283.486 13.7333 282.753 15.36 282.566 17.44H296.406ZM312.731 30.36C311.051 30.36 309.544 30.08 308.211 29.52C306.877 28.9333 305.824 28.1333 305.051 27.12C304.277 26.08 303.851 24.8933 303.771 23.56H307.531C307.637 24.6533 308.144 25.5467 309.051 26.24C309.984 26.9333 311.197 27.28 312.691 27.28C314.077 27.28 315.171 26.9733 315.971 26.36C316.771 25.7467 317.171 24.9733 317.171 24.04C317.171 23.08 316.744 22.3733 315.891 21.92C315.037 21.44 313.717 20.9733 311.931 20.52C310.304 20.0933 308.971 19.6667 307.931 19.24C306.917 18.7867 306.037 18.1333 305.291 17.28C304.571 16.4 304.211 15.2533 304.211 13.84C304.211 12.72 304.544 11.6933 305.211 10.76C305.877 9.82667 306.824 9.09333 308.051 8.56C309.277 8 310.677 7.72 312.251 7.72C314.677 7.72 316.637 8.33333 318.131 9.56C319.624 10.7867 320.424 12.4667 320.531 14.6H316.891C316.811 13.4533 316.344 12.5333 315.491 11.84C314.664 11.1467 313.544 10.8 312.131 10.8C310.824 10.8 309.784 11.08 309.011 11.64C308.237 12.2 307.851 12.9333 307.851 13.84C307.851 14.56 308.077 15.16 308.531 15.64C309.011 16.0933 309.597 16.4667 310.291 16.76C311.011 17.0267 311.997 17.3333 313.251 17.68C314.824 18.1067 316.104 18.5333 317.091 18.96C318.077 19.36 318.917 19.9733 319.611 20.8C320.331 21.6267 320.704 22.7067 320.731 24.04C320.731 25.24 320.397 26.32 319.731 27.28C319.064 28.24 318.117 29 316.891 29.56C315.691 30.0933 314.304 30.36 312.731 30.36Z"
                fill="white"
              />
            </g>
          </svg>

          <defs>
            <clipPath id="clip0_343_894">
              <rect width="180" height="24.8741" fill="white"></rect>
            </clipPath>
          </defs>
        </a>
        <button
          class="hamburger"
          aria-label="Open menu"
          aria-controls="navigation"
          aria-expanded="false"
          tabindex="0"
          fdprocessedid="g0ipx8"
        >
          <svg
            width="30"
            height="21"
            viewBox="0 0 24 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1.4375H24" stroke="#F0FFF6" stroke-width="1.5"></path>
            <path d="M0 7.4375H24" stroke="#F0FFF6" stroke-width="1.5"></path>
            <path d="M0 13.4375H24" stroke="#F0FFF6" stroke-width="1.5"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
