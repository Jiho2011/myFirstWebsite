function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    > 
      <h1 style={{ fontFamily: 'fantasy', color: '#4b9be1' }}>
        {`Hello! I'm jiho! This is my first website!`}
      </h1>
      <h2
        style={{
          fontFamily: 'cursive',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
        please click the buttons below
      </h2>
      <button
        style={{
          fontFamily: 'fantasy',
          padding: '1rem',
          fontSize: '2rem',
          background: 'green',
          color: 'white'
        }}
        onClick={() => alert('Hello there' + '!' + ' ' + 'What is your name?')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'fantasy',
          padding: '1rem',
          fontSize: '2rem',
          background: 'blue',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Hello' + '!' + ' ' + 'Nice to meet you, ' + name + '!');
          } else {
            alert(
              'Nice to meet you, stranger.' +
                ' ' +
                'Please tell your name next time!'
            );
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}

export default HomePage;
