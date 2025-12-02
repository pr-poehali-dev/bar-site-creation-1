import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        setIsMusicPlaying(false);
      });
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const cocktails = [
    {
      name: 'Хмельной Закат',
      description: 'Авторский пивной коктейль на основе светлого лагера с добавлением грейпфрутового сока, имбирного сиропа и мяты',
      price: '450₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/13f57b0d-7381-49d1-8f11-11bfc4fe20a9.jpg'
    },
    {
      name: 'Лофт Мьюл',
      description: 'IPA, имбирное пиво, лайм, мята и острый перец. Освежающий коктейль с пикантной ноткой',
      price: '490₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/13f57b0d-7381-49d1-8f11-11bfc4fe20a9.jpg'
    },
    {
      name: 'Индустриальный Твист',
      description: 'Тёмный эль, апельсиновый ликёр, биттер, цедра апельсина. Глубокий вкус с цитрусовыми нотами',
      price: '520₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/13f57b0d-7381-49d1-8f11-11bfc4fe20a9.jpg'
    },
    {
      name: 'Медный Ритм',
      description: 'Светлое пшеничное пиво, персиковый сироп, базилик, просекко. Лёгкий игристый микс',
      price: '470₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/13f57b0d-7381-49d1-8f11-11bfc4fe20a9.jpg'
    }
  ];

  const dishes = [
    {
      name: 'Бургер "Наш"',
      description: 'Мраморная говядина, бекон, чеддер, карамелизированный лук, салат айсберг, фирменный соус. Подаётся с картофелем фри',
      price: '690₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/eacba181-ed4f-4304-bbf1-187fba8c2b8f.jpg'
    },
    {
      name: 'Стейк Рибай',
      description: 'Выдержанная говядина 300г, овощи гриль, соус демиглас, розмариновый картофель',
      price: '1290₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/eacba181-ed4f-4304-bbf1-187fba8c2b8f.jpg'
    },
    {
      name: 'Пивные Крылышки',
      description: 'Куриные крылья в пивном маринаде с острым или BBQ соусом, сельдерей, сырный дип',
      price: '550₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/eacba181-ed4f-4304-bbf1-187fba8c2b8f.jpg'
    },
    {
      name: 'Камамбер Гриль',
      description: 'Запечённый камамбер с клюквенным соусом, грецкими орехами и хрустящим багетом',
      price: '620₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/eacba181-ed4f-4304-bbf1-187fba8c2b8f.jpg'
    }
  ];

  const kidsMenu = [
    { name: 'Мини-бургер', description: 'Сочная котлета, сыр, булочка, картофель фри', price: '350₽' },
    { name: 'Куриные наггетсы', description: 'Нежные наггетсы с картофелем и кетчупом', price: '320₽' },
    { name: 'Паста с сыром', description: 'Пенне в сливочном сырном соусе', price: '380₽' },
    { name: 'Молочный коктейль', description: 'Ванильный, шоколадный или клубничный', price: '250₽' }
  ];

  const petsMenu = [
    { name: 'Говяжьи снеки', description: 'Натуральные сушёные кусочки говядины', price: '200₽' },
    { name: 'Куриное филе', description: 'Отварное куриное филе без специй', price: '180₽' },
    { name: 'Питьевая вода', description: 'Чистая вода в миске', price: 'Бесплатно' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <audio ref={audioRef} loop onPlay={() => setIsMusicPlaying(true)} onPause={() => setIsMusicPlaying(false)}>
        <source src="https://cdn.poehali.dev/audio/dub-ambient.mp3" type="audio/mpeg" />
      </audio>

      <Button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-primary/80 hover:bg-primary"
        size="icon"
      >
        <Icon name={isMusicPlaying ? 'Volume2' : 'VolumeX'} size={20} />
      </Button>

      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.85)), url('https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/84e9926b-dda4-458e-9073-b771e33662c7.jpg')`
        }}
      >
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-bold text-primary mb-6 text-shadow">НАШ БАР</h1>
          <p className="text-2xl md:text-3xl text-secondary mb-8 text-shadow">Гастробар с авторской кухней</p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Индустриальная атмосфера, крафтовые пивные коктейли и блюда от шефа
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
            Забронировать столик
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary">Пивные коктейли</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Авторские миксы от наших барменов</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cocktails.map((cocktail, idx) => (
              <Card key={idx} className="bg-background border-border hover:border-primary transition-all duration-300 overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-primary">{cocktail.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{cocktail.description}</p>
                  <p className="text-2xl font-bold text-accent">{cocktail.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary">Авторская кухня</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Блюда от шеф-повара</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dishes.map((dish, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-primary">{dish.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{dish.description}</p>
                  <p className="text-2xl font-bold text-accent">{dish.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary flex items-center gap-3">
                <Icon name="Baby" size={40} className="text-accent" />
                Детское меню
              </h2>
              <div className="space-y-4">
                {kidsMenu.map((item, idx) => (
                  <Card key={idx} className="bg-background border-border p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">{item.name}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                      <span className="text-xl font-bold text-accent ml-4">{item.price}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary flex items-center gap-3">
                <Icon name="PawPrint" size={40} className="text-accent" />
                Для питомцев
              </h2>
              <div className="space-y-4">
                {petsMenu.map((item, idx) => (
                  <Card key={idx} className="bg-background border-border p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">{item.name}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                      <span className="text-xl font-bold text-accent ml-4">{item.price}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-primary">Мы ждём вас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">ул. Лофтовая, 42</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Clock" size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Часы работы</h3>
              <p className="text-muted-foreground">Пн-Чт: 12:00-00:00</p>
              <p className="text-muted-foreground">Пт-Вс: 12:00-02:00</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Phone" size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
            Забронировать
          </Button>
        </div>
      </section>

      <footer className="bg-card py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 НАШ БАР. Все права защищены.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}
