import { SvgIcon } from '@mui/material';

const FlexibleSvg = ({ width = 85, height = 85, ...props }) => {
  return (
    <SvgIcon
      sx={{ width, height }}
      viewBox={'0 0 85 85'}
      fill={'none'}
      {...props}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <svg
        width="85"
        height="85"
        viewBox="0 0 85 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="84.2269"
          height="84.7223"
          rx="42.1134"
          fill="white"
          fillOpacity="0.06"
        />
        <path
          d="M59.5587 55.8718H26.0199V21.7179C26.0199 20.3948 27.0925 19.3223 28.4156 19.3223H63.6312L59.5587 23.616V55.8718Z"
          fill="#E0E9EF"
        />
        <path
          d="M38.372 40.8261C36.465 40.8262 35.6436 39.443 35.2695 38.5416C33.6356 39.3419 32.2306 39.6728 32.1076 39.7009C31.7917 39.7729 31.4777 39.5755 31.4058 39.2599C31.3337 38.9444 31.5312 38.6301 31.8467 38.5581C31.8861 38.549 33.267 38.2202 34.8399 37.4358C33.9161 34.9732 34.9114 32.1975 37.2229 30.9731C38.8567 29.9942 40.9333 31.8015 40.252 33.5597C39.5476 35.5943 37.9234 37.0191 36.3084 37.9804C36.7132 39.0179 37.3673 39.959 39.1575 39.5594C39.8572 39.4032 40.3817 38.8194 40.4329 38.1396C40.4352 38.1087 40.4366 38.0772 40.4371 38.045C40.441 37.7788 40.6236 37.5486 40.882 37.4845C41.1406 37.4208 41.4096 37.5386 41.5372 37.772C41.7873 38.2258 42.6801 39.5082 43.468 39.4506C44.0278 39.4086 44.6141 38.6326 45.1185 37.2657C45.1958 37.0563 45.3854 36.9089 45.6074 36.8857C45.8297 36.8622 46.0453 36.9675 46.1643 37.1565C46.4063 37.5382 47.2615 38.6145 47.9868 38.5519C48.4388 38.512 48.9039 37.9633 49.2963 37.0067C49.3722 36.8215 49.5375 36.6878 49.7344 36.6524C49.9314 36.6166 50.133 36.6842 50.2688 36.8313C50.272 36.8347 50.8128 37.3996 51.4333 37.3765C51.7765 37.3643 52.1116 37.1617 52.4292 36.7742C52.6345 36.5239 53.0036 36.4873 53.2541 36.6924C53.5045 36.8976 53.5411 37.2669 53.3359 37.5173C52.7922 38.1807 52.162 38.5276 51.4629 38.5484C50.8997 38.5662 50.4131 38.3636 50.0541 38.144C49.519 39.1238 48.8591 39.6532 48.0866 39.7199C47.1589 39.7996 46.3515 39.1752 45.8212 38.6103C45.1941 39.8942 44.4473 40.5539 43.5531 40.6198C42.5967 40.6891 41.784 40.0162 41.2378 39.3788C40.8523 40.0332 40.1964 40.5286 39.4128 40.7036C39.0343 40.788 38.688 40.826 38.372 40.8261ZM37.7702 32.0094C36.0488 32.952 35.2639 34.9865 35.8794 36.8592C37.2491 36.0143 38.6329 34.833 39.1443 33.1761C39.5542 31.8473 38.3122 31.7126 37.7702 32.0094Z"
          fill="#9BB6C6"
        />
        <path
          d="M53.5696 27.0914H32.1358C31.8122 27.0914 31.5497 26.8289 31.5497 26.5053C31.5497 26.1816 31.8122 25.9192 32.1358 25.9192H53.5696C53.8932 25.9192 54.1557 26.1816 54.1557 26.5053C54.1557 26.8289 53.8932 27.0914 53.5696 27.0914Z"
          fill="#9BB6C6"
        />
        <path
          d="M67.6491 23.3529C67.6491 21.1269 65.838 19.3223 63.6039 19.3223C61.3697 19.3223 59.5587 21.1268 59.5587 23.3529V28.8866H67.6492V23.3529H67.6491Z"
          fill="#9BB6C6"
        />
        <path
          d="M56.9924 63.0961L53.5128 60.1662L52.7738 58.2762L50.1376 51.5919L40.8053 50.0715L39.4415 49.0388C39.4415 49.0388 36.3529 46.7585 33.3559 46.4181C32.1338 46.2793 30.9493 45.8886 29.8982 45.25C28.7758 44.5681 27.727 43.5759 27.8039 42.2701L26.4511 42.6647L16.3408 53.6911L17.1953 54.1743C18.7035 55.0271 19.9797 56.2362 20.9198 57.7077L20.9564 57.7649C21.9144 59.2635 23.244 60.4887 24.8156 61.3213L26.1482 62.0273L36.0789 69.7913L41.3283 73.8025C42.2079 74.4997 43.4829 74.288 44.2175 73.3808C45.0272 72.3809 44.8738 70.9145 43.8756 70.1033C43.8756 70.1034 42.8773 69.2921 43.8756 70.1033L45.5729 71.4777C46.5483 72.2676 47.9793 72.1173 48.7691 71.142C49.5589 70.1667 49.4084 68.7358 48.433 67.9458L50.2921 69.4513C51.2675 70.2412 52.6984 70.0909 53.4882 69.1156C54.2781 68.1403 54.1275 66.7094 53.1521 65.9194L54.0557 66.6511C55.0452 67.4524 56.497 67.3001 57.2985 66.3108L57.2987 66.3105C58.0894 65.3346 57.9533 63.9052 56.9924 63.0961Z"
          fill="#FFDECF"
        />
        <path
          d="M55.2535 65.4533L49.7525 60.9987L48.5206 62.1689L54.0556 66.6512C55.045 67.4526 56.4968 67.3002 57.2984 66.3109L57.2986 66.3106C57.4334 66.1441 57.5393 65.9638 57.6208 65.7764C56.8582 66.1058 55.9437 66.0124 55.2535 65.4533Z"
          fill="#FFC7B3"
        />
        <path
          d="M45.0733 68.9054H45.0732L45.0733 68.9055V68.9054Z"
          fill="#FFDECF"
        />
        <path
          d="M42.5261 72.6047L38.9972 69.908L36.079 69.7913L41.3285 73.8025C42.208 74.4997 43.483 74.288 44.2176 73.3808C44.3527 73.2141 44.4584 73.0336 44.5405 72.8462C43.8784 73.1288 43.1141 73.0708 42.5261 72.6047Z"
          fill="#FFC7B3"
        />
        <path
          d="M46.7706 70.28L45.0732 68.9054L41.7352 66.1649L40.5447 67.3686L43.8755 70.1032L45.5728 71.4777C46.5482 72.2676 47.9792 72.1173 48.769 71.142C48.9046 70.9746 49.0105 70.793 49.0912 70.6043C48.3423 70.9224 47.4471 70.8277 46.7706 70.28Z"
          fill="#FFC7B3"
        />
        <path
          d="M51.4897 68.2535L49.6307 66.7481L45.8584 63.8167L44.4516 64.8453L48.4328 67.9458L50.2918 69.4513C51.2672 70.2412 52.6981 70.0909 53.488 69.1156C53.6236 68.9482 53.7295 68.7666 53.8102 68.5779C53.0614 68.896 52.1662 68.8013 51.4897 68.2535Z"
          fill="#FFC7B3"
        />
        <path
          d="M26.2084 40.658L29.6957 43.01C30.3703 43.465 30.547 44.382 30.0897 45.0555L21.1715 58.1886C20.7167 58.8583 19.8064 59.0339 19.1356 58.5815L15.6486 56.2298C14.974 55.7748 14.7967 54.8586 15.2539 54.1852C17.23 51.2747 22.203 43.9509 24.1728 41.05C24.6276 40.3803 25.5374 40.2055 26.2084 40.658Z"
          fill="#F761A6"
        />
        <path
          d="M20.0664 53.4792C20.5998 53.8387 20.7407 54.5619 20.3809 55.0947C20.0213 55.6275 19.2972 55.768 18.7639 55.4085C18.2305 55.049 18.0896 54.3257 18.4494 53.7928C18.8091 53.2602 19.5331 53.1198 20.0664 53.4792Z"
          fill="white"
          fillOpacity="0.06"
        />
        <path
          d="M34.3879 48.387L40.5479 44.6247C41.7852 43.869 43.2984 43.7152 44.6624 44.2062L48.9922 45.7651C49.8883 46.0879 50.8605 46.1357 51.7839 45.9025L58.7386 44.1469L64.7835 56.7024C64.7835 56.7024 62.4477 61.8017 56.5222 62.7L42.543 50.6813L39.2113 51.6776L37.0454 54.3459C35.4997 56.2502 32.8347 56.8176 30.6472 55.7085C29.996 55.3783 29.7901 54.5468 30.2117 53.9509L33.682 49.0466C33.87 48.7811 34.1102 48.5567 34.3879 48.387Z"
          fill="#FFC7B3"
        />
        <path
          d="M59.6755 40.7251L56.0328 42.8279C55.328 43.2347 55.0878 44.1373 55.497 44.841L63.4782 58.5647C63.8852 59.2645 64.781 59.5033 65.4819 59.0986L69.1242 56.9962C69.8289 56.5894 70.0696 55.6877 69.6604 54.9842C67.892 51.9428 63.4415 44.2897 61.6786 41.2583C61.2716 40.5585 60.3764 40.3205 59.6755 40.7251Z"
          fill="#6262F4"
        />
        <path
          d="M64.9088 53.9438C64.3516 54.2651 64.1607 54.9769 64.4824 55.5336C64.8042 56.0903 65.5166 56.2809 66.0737 55.9596C66.6309 55.6383 66.8218 54.9265 66.5001 54.3698C66.1783 53.8131 65.4659 53.6225 64.9088 53.9438Z"
          fill="white"
          fillOpacity="0.06"
        />
        <path
          d="M33.4308 62.8289L29.6321 68.2539C28.9396 69.2428 29.1955 70.6075 30.1991 71.2784L30.2335 71.3014C31.2093 71.9538 32.5278 71.7043 33.1977 70.7406L36.9778 65.3037C37.6548 64.3298 37.4167 62.9916 36.445 62.3112L36.4293 62.3002C35.4552 61.6182 34.1128 61.855 33.4308 62.8289Z"
          fill="#FFC7B3"
        />
        <path
          d="M31.9957 71.2784C30.9922 70.6075 30.7363 69.2428 31.4287 68.2539L35.2274 62.8289C35.4549 62.5039 35.7567 62.2632 36.093 62.1091C35.1655 61.6815 34.0372 61.9627 33.4306 62.8289L29.632 68.2539C28.9395 69.2428 29.1954 70.6075 30.199 71.2784L30.2334 71.3014C30.8778 71.7322 31.6707 71.7675 32.3285 71.4658C32.2265 71.4188 32.1263 71.3658 32.0301 71.3014L31.9957 71.2784Z"
          fill="#F9AD95"
        />
        <path
          d="M32.216 60.8103C33.19 61.4923 33.4267 62.8347 32.7447 63.8086L29.6051 68.2923C28.9231 69.2663 27.5807 69.503 26.6067 68.821C25.6327 68.139 25.396 66.7966 26.078 65.8227L29.2176 61.339C29.8996 60.3651 31.242 60.1283 32.216 60.8103Z"
          fill="#FFC7B3"
        />
        <path
          d="M27.8747 65.8227L31.0142 61.339C31.2418 61.014 31.5435 60.7733 31.8798 60.6192C30.9523 60.1916 29.824 60.4728 29.2175 61.339L26.0779 65.8227C25.3959 66.7967 25.6326 68.1391 26.6066 68.821C27.2556 69.2755 28.0675 69.3199 28.7394 69.0121C28.624 68.9589 28.5111 68.8965 28.4034 68.821C27.4295 68.1391 27.1928 66.7967 27.8747 65.8227Z"
          fill="#F9AD95"
        />
        <path
          d="M35.6303 67.1699L33.8627 69.6942C33.1807 70.6682 33.4174 72.0105 34.3914 72.6925C35.3654 73.3745 36.7078 73.1378 37.3898 72.1638L39.1574 69.6396C39.8394 68.6656 39.6027 67.3233 38.6287 66.6413C37.6546 65.9593 36.3122 66.1959 35.6303 67.1699Z"
          fill="#FFC7B3"
        />
        <path
          d="M36.1882 72.6925C35.2142 72.0105 34.9775 70.6681 35.6595 69.6942L37.4271 67.1699C37.6546 66.845 37.9563 66.6042 38.2927 66.4502C37.3652 66.0226 36.2368 66.3038 35.6303 67.1699L33.8627 69.6942C33.1807 70.6682 33.4174 72.0105 34.3914 72.6925C35.0405 73.147 35.8523 73.1914 36.5242 72.8836C36.4088 72.8303 36.2959 72.768 36.1882 72.6925Z"
          fill="#F9AD95"
        />
        <path
          d="M27.2716 60.4424C26.2976 59.7604 24.9552 59.997 24.2732 60.971L23.1917 62.5155C22.5097 63.4895 22.7464 64.8318 23.7204 65.5138C24.6943 66.1958 26.0368 65.9592 26.7188 64.9852L27.8003 63.4407C28.4823 62.4668 28.2456 61.1243 27.2716 60.4424Z"
          fill="#FFC7B3"
        />
        <path
          d="M25.5171 65.514C24.5431 64.832 24.3065 63.4895 24.9885 62.5157L26.0699 60.9711C26.2975 60.6462 26.5992 60.4054 26.9355 60.2514C26.0081 59.8238 24.8797 60.105 24.2732 60.9711L23.1917 62.5157C22.5097 63.4897 22.7464 64.832 23.7204 65.514C24.3694 65.9684 25.1813 66.0128 25.8532 65.705C25.7377 65.6517 25.625 65.5893 25.5171 65.514Z"
          fill="#F9AD95"
        />
      </svg>
    </SvgIcon>
  );
};

export default FlexibleSvg;