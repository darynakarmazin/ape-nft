import { ReactElement } from 'react';

interface StyleProps {
  style?: {
    width?: string;
    height?: string;
    fill?: string;
  };
}

export const Logo = ({ style }: StyleProps): ReactElement => {
  return (
    <svg
      width="72"
      height="50"
      viewBox="0 0 72 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_51_765)">
        <path
          d="M0.525391 36.5332H5.24736C8.03944 36.5332 9.78359 37.8276 9.76548 39.8086C9.7577 40.6613 9.76548 41.7253 8.70634 42.699C9.43979 42.699 10.2812 43.7363 10.2812 45.7933C10.2812 48.4089 8.81434 49.8094 6.50949 49.8094H0.525391V36.5332ZM3.42198 39.3777V41.7879H5.70865C6.55444 41.7879 6.75657 41.0438 6.75657 40.6563V40.5644C6.75657 39.8086 6.47148 39.4144 5.70865 39.4144L3.42198 39.3777ZM3.42198 44.2975V47.1495H6.10349C6.74445 47.1495 6.98633 46.4663 6.98633 45.8634V45.6655C6.98633 44.7552 6.57085 44.3151 5.80458 44.3151L3.42198 44.2967V44.2975Z"
          fill="white"
        />
        <path
          d="M13.6138 43.9084L9.23047 36.5332H13.0419L15.1576 40.8592L17.4832 36.5332H20.9516L16.7013 43.9084V49.8087H13.6138V43.9084Z"
          fill="white"
        />
        <path
          d="M43.451 40.8237C43.451 43.5044 41.4001 45.6616 36.9261 45.6616V49.8047H33.7988V36.5527H38.5475C42.2165 36.5527 43.451 38.1428 43.451 40.8237ZM36.9261 43.1854H38.0171C39.4244 43.1854 40.5284 42.3661 40.5284 40.8237C40.5284 39.2811 39.6309 38.8602 38.0171 38.8602H36.9261V43.1862V43.1854Z"
          fill="white"
        />
        <path
          d="M0.525391 34.7454V17.3711H4.9476L10.016 26.6671L15.3608 17.3711H19.783V34.7454H15.3608V26.8074L10.016 34.7454L4.9476 26.8074V34.7454H0.525391Z"
          fill="white"
        />
        <path
          d="M25.2246 17.3711H31.2433L35.6344 34.7454H31.7262L30.6982 31.5142H25.6315L24.6804 34.7454H20.6953L25.2255 17.3711H25.2246ZM28.2344 21.956L26.2432 28.3182H30.0788L28.2344 21.956Z"
          fill="white"
        />
        <path
          d="M51.1211 17.3719H63.5196V21.2988H55.0691V24.0331H63.5196V27.8605H55.0691V31.1167H63.5196V34.7454H51.1211V17.3711V17.3719Z"
          fill="white"
        />
        <path
          d="M44.1406 36.5525H53.5974V39.5481H47.1521V41.6335H53.5974V44.5532H47.1521V47.0369H53.5974V49.8045H44.1406V36.5525Z"
          fill="white"
        />
        <path
          d="M25.1665 36.5525H29.7571L33.1064 49.8045H30.126L29.3416 47.34H25.4766L24.7509 49.8045H21.7109L25.1665 36.5525ZM27.4626 40.0501L25.944 44.9023H28.8699L27.4626 40.0501Z"
          fill="white"
        />
        <path
          d="M42.1204 34.7704L36.4922 34.7545V17.3802L42.1204 17.3259C47.3935 17.3259 50.2098 19.8781 50.2098 26.1793C50.2098 31.0131 47.5067 34.7704 42.1204 34.7704ZM40.3667 31.0131H42.1204C44.5816 31.0131 46.083 29.448 46.083 26.1793C46.083 22.9105 44.9116 21.3864 42.1204 21.3864H40.3667V31.0131Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.7233 40.2378C54.7233 38.1709 56.2051 36.6693 58.6023 36.4647C60.603 36.2934 62.4257 37.0175 63.8086 37.9345L62.5448 40.7422C62.5448 40.7422 61.1308 39.9238 60.2996 39.6616C59.6474 39.4553 58.7802 39.6499 58.6023 40.0917C58.4244 40.5335 58.4573 40.9853 59.0333 41.2743C59.0793 41.2976 59.1307 41.3227 59.1868 41.3511C59.505 41.5081 59.9851 41.7461 60.5294 42.0768H60.5384C60.5384 42.0768 61.7078 42.7056 62.6211 43.7162C62.6952 43.793 62.7688 43.8724 62.8403 43.9526H62.8249C63.3146 44.5564 63.6868 45.2746 63.6868 46.0638C63.6868 48.1299 61.9789 49.7743 59.5817 49.9789C57.5811 50.1501 55.7525 49.2382 54.3691 48.3212L55.3464 45.5093C55.3464 45.5093 57.2798 46.3769 58.11 46.64C58.7622 46.8463 59.6294 46.6517 59.8073 46.2099C59.9851 45.7681 60.0079 45.4533 59.3763 45.0273C59.1794 44.8946 58.9433 44.7568 58.6764 44.6014C58.4768 44.4853 58.2603 44.3593 58.0306 44.2173C57.7807 44.0862 54.7207 42.4376 54.7207 40.2378H54.7233Z"
          fill="white"
        />
        <path
          d="M68.7852 20.2233V17.3262H69.4798L70.3464 18.8762L71.1739 17.3262H71.9971V20.2233H71.3025V18.7935L70.3464 20.2233L69.5232 18.7935V20.2233H68.7852Z"
          fill="white"
        />
        <path
          d="M65.8906 17.9356V17.3259H68.5239V17.9356H67.5641V20.223H66.8594V17.9356H65.8906Z"
          fill="white"
        />
        <path
          d="M14.9547 1.33457L13.4611 1.0882C13.3739 1.07401 13.3591 0.961267 13.4395 0.927024C16.9106 -0.547836 20.5708 0.05597 23.2385 2.37182C23.3335 2.4545 23.3085 2.60399 23.1953 2.66162C22.715 2.90631 22.1811 3.26208 21.9427 3.42661C21.8693 3.47755 21.7682 3.46836 21.7034 3.40823C19.9938 1.82564 16.832 1.61017 14.9547 1.33374V1.33457Z"
          fill="white"
        />
        <path
          d="M49.0923 1.33457L50.5868 1.0882C50.6741 1.07401 50.6888 0.961267 50.6084 0.927024C47.1365 -0.547836 43.4762 0.05597 40.8086 2.37182C40.7135 2.4545 40.7386 2.60399 40.8518 2.66162C41.3321 2.90631 41.866 3.26208 42.1044 3.42661C42.1778 3.47755 42.2789 3.46836 42.3437 3.40823C44.0533 1.82564 47.2151 1.61017 49.0923 1.33374V1.33457Z"
          fill="white"
        />
        <path
          d="M32.1127 2.60648C29.7128 2.60648 28.3703 2.01687 26.0085 1.98263C25.929 1.98179 25.8893 1.88909 25.948 1.83731C27.6326 0.347419 30.879 0 32.0073 0C32.955 0 36.0986 0.274762 37.9283 1.82729C37.9905 1.87991 37.949 1.97595 37.8661 1.97428C35.4982 1.93753 35.481 2.60564 32.1118 2.60564L32.1127 2.60648Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.35349 14.778H0.892668C0.636957 14.778 0.460725 14.5274 0.547979 14.2953C0.70866 13.866 0.91772 13.2531 0.94536 12.8989C0.97128 12.5607 0.960046 12.2809 0.948817 12.027C0.927223 11.5151 0.909943 11.1084 1.21921 10.5405C1.47319 10.0745 1.75309 9.70115 2.03904 9.3212C2.39755 8.84429 2.76383 8.35661 3.09642 7.66007C3.34954 7.12893 3.51368 6.37311 3.68905 5.56388C3.85059 4.81809 4.02164 4.02721 4.28167 3.32652C4.82419 1.8667 5.01683 1.34724 6.34291 1.1301C7.6387 0.917973 9.11941 1.32719 10.6217 1.74393C11.483 1.98278 12.352 2.2233 13.1978 2.34941C13.7308 2.42875 14.2716 2.49807 14.808 2.56655C17.0602 2.85467 19.2562 3.13528 20.6341 4.1625C20.7973 4.28444 20.7973 4.51577 20.6738 4.67612C20.1581 5.34589 19.7279 6.54017 19.6458 7.97579C19.5862 9.00718 19.8384 10.2916 20.3023 11.8792C20.5702 12.7954 20.095 13.7858 19.7797 14.4439C19.7589 14.4866 19.7399 14.5274 19.7209 14.5667C19.6605 14.6945 19.5292 14.7788 19.3832 14.7788H8.14238C7.94364 14.7788 7.78296 14.6226 7.77348 14.4306C7.69402 12.787 7.04178 11.0717 5.36064 11.0717C3.67954 11.0717 2.92624 13.1186 2.7215 14.464C2.69472 14.6427 2.54009 14.7797 2.35349 14.7797V14.778ZM5.19566 9.05646C4.51232 8.34491 4.82937 7.69599 5.18529 6.96857C5.30621 6.72141 5.43237 6.46501 5.52391 6.19357C5.62413 5.89795 5.70449 5.58811 5.78396 5.28326C6.09583 4.08317 6.3904 2.94904 7.82706 2.94904C7.82706 2.94904 8.81706 3.03172 9.38718 3.35993C10.8255 4.18756 10.7297 7.27259 9.29734 8.73826C8.07064 9.99347 5.81249 9.69867 5.19566 9.05558V9.05646ZM12.4315 10.7259C13.8077 11.6972 16.0209 11.4416 16.9859 10.69C18.2549 9.70115 18.5374 6.38981 17.461 5.42357C16.3 4.38215 15.0379 4.2669 13.6746 4.89827C12.1335 5.61233 11.4717 10.0494 12.4307 10.7259H12.4315Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61.6926 14.778H63.1527C63.4084 14.778 63.5847 14.5274 63.4973 14.2953C63.3364 13.866 63.1273 13.2531 63.0998 12.8989C63.0738 12.5607 63.0849 12.2809 63.0966 12.027C63.1178 11.5151 63.1352 11.1084 62.826 10.5405C62.5719 10.0745 62.2919 9.70115 62.006 9.3212C61.6476 8.84429 61.2812 8.35661 60.9488 7.66007C60.6957 7.12893 60.5316 6.37311 60.3563 5.56388C60.1949 4.81809 60.0233 4.02721 59.7634 3.32652C59.2208 1.8667 59.0286 1.34724 57.7024 1.1301C56.4064 0.917973 54.9256 1.32719 53.4237 1.74393C52.5622 1.98278 51.6932 2.2233 50.8474 2.34941C50.3144 2.42875 49.7736 2.49807 49.2372 2.56655C46.985 2.85467 44.789 3.13528 43.4111 4.1625C43.2479 4.28444 43.2479 4.51577 43.3714 4.67612C43.8871 5.34589 44.3173 6.54017 44.3994 7.97579C44.459 9.00718 44.2067 10.2916 43.7429 11.8792C43.5001 12.7102 43.8673 13.6013 44.1739 14.2502C44.3251 14.5701 44.6594 14.7788 45.0231 14.7788H55.9035C56.103 14.7788 56.2629 14.6226 56.2725 14.4306C56.3519 12.787 57.0041 11.0717 58.6855 11.0717C60.3664 11.0717 61.1208 13.1186 61.3246 14.464C61.3511 14.6427 61.5062 14.7797 61.6926 14.7797V14.778ZM58.8512 9.05646C59.5347 8.34491 59.2176 7.69599 58.8618 6.96857C58.7406 6.72141 58.6156 6.46501 58.523 6.19357C58.4229 5.89795 58.3425 5.58811 58.263 5.28326C57.9512 4.08317 57.6563 2.94904 56.22 2.94904C56.22 2.94904 55.23 3.03172 54.6599 3.35993C53.2215 4.18756 53.3173 7.27259 54.7493 8.73826C55.9765 9.99347 58.2345 9.69867 58.8512 9.05558V9.05646ZM51.6154 10.7259C50.2392 11.6972 48.026 11.4416 47.061 10.69C45.792 9.70115 45.5095 6.38981 46.5859 5.42357C47.747 4.38215 49.0091 4.2669 50.3723 4.89827C51.9134 5.61233 52.5752 10.0494 51.6163 10.7259H51.6154Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.4059 14.7767H21.24C21.1 14.7767 21.0136 14.6297 21.0784 14.5103C21.9104 12.9853 21.6115 11.9105 21.2771 10.7104C21.0301 9.82259 20.7631 8.86636 20.9238 7.6095C21.3532 5.18842 22.5134 3.97578 24.8545 3.39369C26.0691 3.09136 27.5143 3.32353 29.0123 3.56405C30.0499 3.73025 31.1115 3.90062 32.1404 3.90062C32.9076 3.90062 33.8345 3.75864 34.8021 3.61082C36.3233 3.37782 37.9449 3.13062 39.2001 3.39369C41.6155 3.90062 42.9078 5.28363 43.0409 7.48089C43.129 8.94404 42.8802 9.97796 42.6677 10.859C42.3644 12.1159 42.1373 13.0621 43.0711 14.4978C43.1489 14.6172 43.0633 14.7775 42.9174 14.7775H35.577C35.4128 14.7775 35.2694 14.6723 35.2159 14.522C34.9533 13.7896 34.0324 11.7318 31.9918 11.7318C29.9514 11.7318 29.0305 13.7896 28.767 14.522C28.7134 14.6715 28.5691 14.7775 28.4059 14.7775V14.7767ZM27.358 11.3476C25.9231 12.1635 24.0571 12.151 23.3332 10.5392C22.5116 8.7077 23.3099 6.11878 25.6233 5.47821C28.0465 4.80758 30.3911 5.13496 30.303 6.90131C30.2373 8.21414 29.0357 10.3938 27.358 11.3468V11.3476ZM40.7646 10.5392C40.0415 12.151 38.1746 12.1627 36.7398 11.3476C35.0621 10.3938 33.8605 8.21414 33.7948 6.90213C33.7067 5.1358 36.0512 4.80842 38.4744 5.47904C40.787 6.11961 41.5861 8.70852 40.7646 10.54V10.5392Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_765">
          <rect width="72" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Discord = ({ style }: StyleProps): ReactElement => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9419 5.88613C17.6472 5.31705 16.2629 4.90345 14.8158 4.66797C14.638 4.96987 14.4303 5.37592 14.2872 5.69895C12.7487 5.48159 11.2244 5.48159 9.71429 5.69895C9.57116 5.37592 9.35876 4.96987 9.17947 4.66797C7.73067 4.90345 6.34479 5.31856 5.05016 5.88915C2.43887 9.59646 1.73099 13.2117 2.08493 16.7756C3.81688 17.9908 5.49534 18.7289 7.14548 19.2119C7.55291 18.6851 7.91628 18.1251 8.22933 17.5349C7.63314 17.322 7.06211 17.0594 6.52255 16.7545C6.6657 16.6549 6.8057 16.5507 6.94099 16.4435C10.2319 17.8896 13.8074 17.8896 17.059 16.4435C17.1958 16.5507 17.3358 16.6549 17.4774 16.7545C16.9362 17.0609 16.3637 17.3235 15.7674 17.5364C16.0805 18.1251 16.4423 18.6866 16.8513 19.2134C18.503 18.7304 20.183 17.9923 21.915 16.7756C22.3303 12.6441 21.2055 9.0621 18.9419 5.88613ZM8.67765 14.5838C7.68977 14.5838 6.87963 13.7174 6.87963 12.6623C6.87963 11.6071 7.67246 10.7392 8.67765 10.7392C9.68285 10.7392 10.4929 11.6056 10.4756 12.6623C10.4773 13.7174 9.68285 14.5838 8.67765 14.5838ZM15.3223 14.5838C14.3344 14.5838 13.5242 13.7174 13.5242 12.6623C13.5242 11.6071 14.3171 10.7392 15.3223 10.7392C16.3274 10.7392 17.1376 11.6056 17.1203 12.6623C17.1203 13.7174 16.3274 14.5838 15.3223 14.5838Z"
        fill="#1E1E1E"
      />
    </svg>
  );
};

export const Opensea = ({ style }: StyleProps): ReactElement => {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>OpenSea</title>
      <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z" />
    </svg>
  );
};

export const Twitter = ({ style }: StyleProps): ReactElement => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_51_856)">
        <path
          d="M14.2833 10.1571L23.2178 0H21.1006L13.3427 8.81931L7.14656 0H0L9.36984 13.3364L0 23.9877H2.11732L10.3098 14.6742L16.8534 23.9877H24L14.2827 10.1571H14.2833ZM11.3833 13.4538L10.4339 12.1258L2.88022 1.55881H6.1323L12.2282 10.0867L13.1776 11.4147L21.1016 22.4998H17.8495L11.3833 13.4544V13.4538Z"
          fill="#1E1E1E"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_856">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const AddSharp = ({ style }: StyleProps): ReactElement => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8334 7.22716L7.22683 17.8338L6.16617 16.7731L16.7728 6.1665L17.8334 7.22716Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.22723 6.1665L17.8338 16.7731L16.7732 17.8338L6.16657 7.22716L7.22723 6.1665Z"
        fill="white"
      />
    </svg>
  );
};
