import * as React from 'react';
import Wrapper from './Wrapper';
import { IconProps } from './interface';

function SvgBarChartOutlined(wrapperProps: IconProps) {
  const { rotating, color, size, ...restProps } = wrapperProps;
  const props = {
    style: {
      color,
    },
    className: rotating ? 'gio-icon-svg gio-icon-rotating' : 'gio-icon-svg',
    width: !size ? '1rem' : size,
    height: !size ? '1rem' : size,
  };
  const file = (
    <svg
      viewBox="0 0 78 78"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      fill="currentColor"
      {...props}
    >
      <path
        d="M75.145 72.234l.139.012.139.016.139.022.133.034.133.033.128.045.128.05.122.055.117.061.117.067.116.072.106.078.105.083.1.09.1.088.09.1.088.1.083.106.078.105.072.117.067.116.061.117.056.122.05.128.044.128.034.133.033.134.022.138.017.14.01.138.006.145-.005.144-.011.139-.017.139-.022.139-.033.133-.034.133-.044.128-.05.128-.056.122-.06.117-.068.117-.072.116-.078.106-.083.105-.089.1-.089.1-.1.09-.1.088-.105.083-.106.078-.116.072-.117.067-.117.061-.122.056-.128.05-.128.044-.133.034-.133.033-.14.022-.138.017-.139.01-.144.006H2.778l-.144-.005-.139-.011-.139-.017-.139-.022-.133-.033-.133-.034-.128-.044-.128-.05-.122-.056-.117-.06-.117-.068-.116-.072-.106-.078-.105-.083-.1-.089-.1-.089-.09-.1-.088-.1-.083-.105-.078-.106-.072-.116-.067-.117-.061-.117-.056-.122-.05-.128-.044-.128-.034-.133-.033-.133-.022-.14-.017-.138-.01-.139L0 75.007l.005-.145.011-.139.017-.139.022-.138.033-.134.034-.133.044-.128.05-.128.056-.122.06-.117.068-.116.072-.117.078-.105.083-.106.089-.1.089-.1.1-.089.1-.089.105-.083.106-.078.116-.072.117-.067.117-.06.122-.056.128-.05.128-.045.133-.033.133-.034.14-.022.138-.016.139-.012.144-.005h72.223l.144.005zM30.556 22.23l.145.005.139.012.138.016.14.022.133.034.133.033.128.045.128.05.122.055.116.061.117.067.117.072.105.078.106.083.1.09.1.088.089.1.089.1.083.106.078.105.072.117.067.116.06.117.056.122.05.128.045.128.033.133.033.134.023.138.016.14.011.138.006.145v38.889l-.006.144-.01.139-.017.139-.023.139-.033.133-.033.133-.045.128-.05.128-.055.122-.061.117-.067.116-.072.117-.078.106-.083.105-.09.1-.088.1-.1.09-.1.088-.106.083-.105.078-.117.072-.117.067-.116.061-.122.056-.128.05-.128.044-.133.033-.134.034-.139.022-.138.017-.14.01-.144.006-.144-.005-.14-.011-.138-.017-.139-.022-.133-.034-.134-.033-.127-.044-.128-.05-.122-.056-.117-.061-.117-.067-.116-.072-.106-.078-.105-.083-.1-.089-.1-.089-.09-.1-.088-.1-.084-.105-.077-.106-.073-.117-.066-.116-.061-.117-.056-.122-.05-.128-.044-.128-.034-.133-.033-.133-.022-.14-.017-.138-.011-.139-.006-.144v-38.89l.006-.144.011-.139.017-.139.022-.138.033-.134.034-.133.044-.128.05-.128.056-.122.06-.117.067-.116.073-.117.077-.105.084-.106.089-.1.089-.1.1-.089.1-.089.105-.083.106-.078.116-.072.117-.067.117-.06.122-.056.128-.05.127-.045.134-.033.133-.034.139-.022.139-.016.139-.012.144-.005zm16.667-11.111l.139.005.133.006.139.017.133.027.134.028.127.039.134.039.122.05.128.055.116.062.123.066.11.072.112.078.111.084.106.088.1.095.094.1.089.105.083.112.078.11.072.112.067.122.061.117.056.127.05.123.038.133.04.128.027.133.028.133.017.14.005.133.006.139v50l-.006.138-.005.134-.017.139-.028.133-.028.133-.039.128-.038.133-.05.123-.056.127-.061.117-.067.122-.072.111-.078.112-.083.11-.089.106-.094.1-.1.095-.106.089-.111.083-.111.078-.111.072-.123.067-.116.06-.128.056-.122.05-.134.04-.127.038-.134.028-.133.028-.139.016-.133.006-.14.005-.138-.005-.133-.006-.14-.016-.133-.028-.133-.028-.128-.039-.133-.039-.122-.05-.128-.055-.117-.061-.122-.067-.111-.072-.111-.078-.111-.083-.106-.09-.1-.094-.094-.1-.09-.105-.082-.111-.078-.112-.072-.11-.067-.123-.061-.117-.056-.127-.05-.123-.039-.133-.039-.128-.027-.133-.028-.133-.017-.14-.005-.133-.006-.138v-50l.006-.14.005-.133.017-.139.028-.133.027-.133.04-.128.038-.133.05-.123.056-.127.06-.117.068-.122.072-.111.078-.111.083-.112.089-.105.094-.1.1-.095.106-.088.11-.084.112-.078.111-.072.122-.066.117-.062.128-.055.122-.05.133-.039.128-.039.133-.028.134-.027.139-.017.133-.006.139-.005zM63.89 33.34l.138.006.134.005.139.017.133.028.133.027.128.04.133.038.123.05.127.056.117.06.122.067.111.073.112.077.11.084.106.089.1.094.095.1.089.106.083.11.078.112.072.111.067.122.06.117.056.128.05.122.04.133.038.128.028.133.028.134.016.139.006.133.005.139v27.778l-.005.138-.006.134-.016.139-.028.133-.028.133-.039.128-.039.133-.05.123-.055.127-.061.117-.067.122-.072.111-.078.112-.083.11-.09.106-.094.1-.1.095-.105.089-.111.083-.112.078-.11.072-.123.067-.117.06-.127.056-.123.05-.133.04-.128.038-.133.028-.133.028-.14.016-.133.006-.138.005-.14-.005-.133-.006-.139-.016-.133-.028-.133-.028-.128-.039-.133-.039-.123-.05-.127-.055-.117-.061-.122-.067-.111-.072-.111-.078-.112-.083-.105-.09-.1-.094-.095-.1-.088-.105-.084-.111-.078-.112-.072-.11-.066-.123-.062-.117-.055-.127-.05-.123-.039-.133-.039-.128-.028-.133-.027-.133-.017-.14-.006-.133-.005-.138V36.118l.005-.14.006-.132.017-.14.027-.133.028-.133.039-.128.039-.133.05-.122.055-.128.062-.117.066-.122.072-.111.078-.111.084-.111.088-.106.095-.1.1-.094.105-.09.112-.083.11-.077.112-.073.122-.066.117-.061.127-.056.123-.05.133-.039.128-.039.133-.027.133-.028.14-.017.133-.005.139-.006zM14.034.012l.139.011.139.017.139.022.133.034.133.033.128.044.128.05.122.056.117.061.116.067.117.072.106.078.105.083.1.089.1.089.09.1.088.1.083.105.078.106.072.117.067.116.061.117.056.122.05.128.044.128.033.133.034.133.022.14.017.138.01.139.006.144v61.112l-.005.138-.006.134-.016.139-.028.133-.028.133-.039.128-.039.133-.05.123-.055.127-.061.117-.067.122-.072.111-.078.112-.083.11-.09.106-.094.1-.1.095-.105.089-.111.083-.112.078-.11.072-.123.067-.117.06-.127.056-.123.05-.133.04-.128.038-.133.028-.133.028-.14.016-.133.006-.138.005-.145-.005-.139-.011-.139-.017-.139-.022-.133-.034-.133-.033-.128-.044-.128-.05-.122-.056-.117-.061-.116-.067-.117-.072-.106-.078-.105-.083-.1-.089-.1-.089-.09-.1-.088-.1-.083-.105-.078-.106-.072-.117-.067-.116-.061-.117-.056-.122-.05-.128-.044-.128-.033-.133-.034-.133-.022-.14-.017-.138-.01-.139-.006-.144V2.784l.005-.138.006-.134.016-.139.028-.133.028-.133.039-.128.039-.133.05-.123.055-.127.061-.117.067-.122.072-.111.078-.112.083-.11.09-.106.094-.1.1-.095.105-.089.111-.083.112-.078.11-.072.123-.067.117-.06.127-.056.123-.05.133-.04.128-.038.133-.028.133-.028.14-.016.133-.006.139-.005.144.005z"
        fill="currentColor"
      />
    </svg>
  );
  return <Wrapper {...restProps} icon={file} />;
}

export default SvgBarChartOutlined;
