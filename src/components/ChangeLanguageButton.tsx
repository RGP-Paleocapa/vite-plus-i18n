import { useTranslation } from 'react-i18next';

function ChangeLanguageButton() {
  const { t, i18n, ready } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  if (!ready) {
    return <div>Loading translations...</div>; // Or any other loading indicator
  }

  return (
    <div className="flex justify-center mt-4">
      <button 
        onClick={() => changeLanguage('en')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
      >
        {t('welcome')}
      </button>
      <button 
        onClick={() => changeLanguage('es')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
      >
        {t('welcome')}
      </button>
    </div>
  );
}

export default ChangeLanguageButton;
