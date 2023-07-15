const [email, setEmail] = useState('Insira seu email');
  const [password, setPassword] = useState('Insira sua senha');

  async function logar() {
    if (email === '' || password === '') {
      alert('Informe o usuário e a senha');
      return;
    }

    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value) => {
        navigation.navigate('Principal', { user: value.user.email });
      })
      .catch((error) => {
        alert('Ops algo deu errado!');
        return;
      });

      setEmail('Insira seu email');
      setPassword('Insira sua senha');
  }