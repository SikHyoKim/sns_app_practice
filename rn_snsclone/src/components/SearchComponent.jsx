import React, {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const xIcon = require('../assets/icons/search/close.png');

const SearchComponent = () => {
  console.log(dummy_search);
  const [inputText, setInputText] = useState('');
  const [searchResults, setSearchResult] = useState(dummy_search);
  const [setchList, setSearchList] = useState([]);

  const handleSearch = ({text, event}) => {
    if (Keyboard.addListener === 'Enter') {
      setInputText(text);
      const filteredResults = dummy_search.filter(item =>
        item.word.includes(text),
      );
      setSearchList(filteredResults);
    }
  };

  return (
    <View style={{backgroundColor: '#F5F5F5'}}>
      <TextInput
        placeholder="검색어를 입력하세요"
        value={inputText}
        onChangeText={handleSearch}
      />
      {searchResults.map(result => (
        <Text key={result.id}>{result.word}</Text>
      ))}
      <TouchableOpacity
        onPress={() => setInputText('')}
        style={{position: 'absolute', right: 10}}>
        <Image source={xIcon} style={{width: 24, height: 24}} />
      </TouchableOpacity>
    </View>
  );
};

const dummy_search = [
  {
    id: 1,
    word: '러닝',
  },
  {
    id: 2,
    word: '필라테스',
  },
  {
    id: 3,
    word: '헬스장',
  },
  {
    id: 4,
    word: '등산',
  },
];

export default SearchComponent;
