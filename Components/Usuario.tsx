import { View, Text, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Usuario() {

   const [user,SetUser] = useState('');
const [welcome, setWelcome] = useState('')

useEffect(()=> {

if(user === ''){
    setWelcome('')
} else {
    setWelcome(`¡Bienvenido ${user}!`)
}

}, [user])


  const DltUser = ()=>{
    SetUser('')
  }

  return (
    <View style={{paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginBottom: 10, marginTop: 20}}>
      <TextInput style={{borderWidth: 1}} placeholder='Ingrese Su nombre de usuario' value={user} onChangeText={(name) => SetUser(name)}></TextInput>

      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 100}}>{welcome}</Text>
      <Button title='Borrar Nombre' onPress={DltUser}></Button>

    </View>
  )
}