import React from 'react';
import { Feather} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';



import logoImg from '../../assets/logo.png';

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL'}).format(incident.value)}`


  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Heroi do caso: Cadelinha atropelada: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Image source={logoImg} />
         
         <TouchableOpacity onPress={navigateBack}>
           <Feather name="arrow-left" size={28} color="#E82041" />
         </TouchableOpacity>
      </View>

      <View style={styles.incident}>
      <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
          <Text style={styles.IncidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

          <Text style={styles.incidentProperty}>Caso:</Text>
          <Text style={styles.IncidentValue}>{incident.title}</Text>

          <Text style={styles.incidentProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(incident.value)}
          </Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

          <Text style={styles.heroDescription}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
              <Text style={styles.actionText}>WhastApp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}
