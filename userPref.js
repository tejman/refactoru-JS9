var preferences = [];

var addPreference = function(title, value)
{
  preferences.push({
    title: title,
    value: value
  });
}

var getPreferenceByTitle = function(title)
{
  for(var i=0; i<preferences.length; i++){
    pref = preferences[i]
    if(pref.title === title){
      return pref;
    }
  }
}


//add the preferences
addPreference('Data', 'private');
addPreference('Username', 'John Doe');

//print out the preferences
for(var i=0;i < preferences.length;i++){
  console.log(preferences[i].title + ': ' + preferences[i].value);
}


//check that the 'Username' preference is set
console.log('Checking Username: '); getPreferenceByTitle('Username'));