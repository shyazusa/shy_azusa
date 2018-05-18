'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: 'Curriculum Vitae',
    url: 'https://github.com/shyazusa/Curriculum-Vitae/blob/master/README.md'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/shy_azusa'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/shyazusa'
  },
  {
    label: 'GitHub Gist',
    url: 'https://gist.github.com/shyazusa'
  },
  {
    label: 'Qiita',
    url: 'https://qiita.com/shy_azusa'
  },
  {
    label: 'Blog',
    url: 'http://d.hatena.ne.jp/shy_azusa/'
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/shy.azusa'
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/shy.azusa/'
  },
  {
    label: 'FOURSQUARE',
    url: 'https://ja.foursquare.com/shy_azusa'
  },
  {
    label: 'imgur',
    url: 'https://imgur.com/user/shyazusa'
  },
  {
    label: 'DeviantArt',
    url: 'https://shyazusa.deviantart.com/'
  },
  {
    label: 'pixiv',
    url: 'https://www.pixiv.net/member.php?id=102431'
  },
  {
    label: 'ニジエ',
    url: 'https://nijie.info/members.php?id=123089'
  },
  {
    label: 'iwara',
    url: 'http://ecchi.iwara.tv/user'
  },
  {
    label: 'Pornhub',
    url: 'https://jp.pornhub.com/users/shyazusa'
  },
  {
    label: 'Amazon Wish List',
    url: 'http://amzn.asia/0CYztAn'
  },
  // TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
  {
    label: 'Quit',
    action() {
      process.exit(); // eslint-disable-line unicorn/no-process-exit
    }
  }
];

module.exports = () => (
  <div>
    <br/>
    <div>
      <Text>Ruby/JavaScript/CoffeeScript/PHP/iPhone 8/PS4/iMac/MBP/macOS/iOS/MtG/Carbonara/uncensored</Text>
    </div>
    <br/>
    <SelectInput items={items} onSelect={handleSelect}/>
  </div>
);
