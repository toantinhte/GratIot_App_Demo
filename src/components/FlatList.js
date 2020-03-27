import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

export default function FlatList({data, refeshing}) {
    const [loading, setLoading] = React.useState(false);
    const [isRefreshing, setRefeshing] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState('');

    

  return (
    <FlatList data={data} ListEmptyComponent={NotFound} refeshing={refeshing} />
  );
}
