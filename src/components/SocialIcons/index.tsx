import React from 'react';
import classNames from 'classnames';

import './style.scss';

import * as img from './images';

export enum SocialType {
  Discord = 'Discord',
  Gitbook = 'Gitbook',
  Github = 'Github',
  Medium = 'Medium',
  Twitter = 'Twitter',
  Telegram = 'Telegram',
}

export interface SocialIcon {
  url: string;
  type: SocialType;
}

export interface SocialIconsProps {
  className?: string;
  linkClassName?: string;
  iconHeight: number;
  iconWidth: number;
  colored?: boolean;
  white?: boolean;
  withTitle?: boolean;
}

interface SocialIconsWrapperProps extends SocialIconsProps {
  icons: SocialIcon[];
}

const ICONS: {
  [key in SocialType]: { icon: string; colorIcon: string; whiteIcon: string };
} = {
  [SocialType.Discord]: {
    icon: img.discordIcon,
    colorIcon: img.colorDiscordIcon,
    whiteIcon: img.whiteDiscordIcon,
  },
  [SocialType.Gitbook]: {
    icon: img.gitbookIcon,
    colorIcon: img.colorGitbookIcon,
    whiteIcon: img.whiteGitbookIcon,
  },
  [SocialType.Github]: {
    icon: img.githubIcon,
    colorIcon: img.colorGithubIcon,
    whiteIcon: img.whiteGithubIcon,
  },
  [SocialType.Medium]: {
    icon: img.mediumIcon,
    colorIcon: img.colorMediumIcon,
    whiteIcon: img.whiteMediumIcon,
  },
  [SocialType.Twitter]: {
    icon: img.twitterIcon,
    colorIcon: img.colorTwitterIcon,
    whiteIcon: img.whiteTwitterIcon,
  },
  [SocialType.Telegram]: {
    icon: img.telegramIcon,
    colorIcon: img.colorTelegramIcon,
    whiteIcon: img.whiteTelegramIcon,
  },
};

export default function SocialIcons({
  icons,
  className,
  linkClassName,
  iconHeight,
  iconWidth,
  colored,
  white,
  withTitle,
}: SocialIconsWrapperProps) {
  return (
    <div className={classNames('SocialIcons', className)}>
      {icons.map((item, index) => (
        <React.Fragment key={index}>
          {item.url && (
            <a
              href={item.url}
              rel="noopener noreferrer"
              target="_blank"
              className={classNames(linkClassName, { SocialIcon__withTitle: withTitle })}
            >
              <img
                src={
                  colored
                    ? ICONS[item.type].colorIcon
                    : white
                    ? ICONS[item.type].whiteIcon
                    : ICONS[item.type].icon
                }
                height={iconHeight}
                width={iconWidth}
                alt="Aave"
              />
              {withTitle && <span>{item.type}</span>}
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
