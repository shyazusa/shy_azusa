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
