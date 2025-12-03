import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
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
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/e46676d5-3dff-474e-959d-717c6bab6294.jpg'
    },
    {
      name: 'Лофт Мьюл',
      description: 'IPA, имбирное пиво, лайм, мята и острый перец. Освежающий коктейль с пикантной ноткой',
      price: '490₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/d2c4d833-f998-4ebf-b57d-2f858b932d4a.jpg'
    },
    {
      name: 'Индустриальный Твист',
      description: 'Тёмный эль, апельсиновый ликёр, биттер, цедра апельсина. Глубокий вкус с цитрусовыми нотами',
      price: '520₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/cca25cd4-990c-43a3-8a42-135977be2890.jpg'
    },
    {
      name: 'Медный Ритм',
      description: 'Светлое пшеничное пиво, персиковый сироп, базилик, просекко. Лёгкий игристый микс',
      price: '470₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/6747d8f0-35fa-4694-a576-8cef58cbde77.jpg'
    }
  ];

  const dishes = [
    {
      name: 'Бургер "Наш"',
      description: 'Мраморная говядина, бекон, чеддер, карамелизированный лук, салат айсберг, фирменный соус. Подаётся с картофелем фри',
      price: '690₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/2c940843-815d-4624-9ed0-b90736b8de13.jpg'
    },
    {
      name: 'Стейк Рибай',
      description: 'Выдержанная говядина 300г, овощи гриль, соус демиглас, розмариновый картофель',
      price: '1290₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/0911d9c0-9b87-4c53-ba29-f10bb5365f67.jpg'
    },
    {
      name: 'Пивные Крылышки',
      description: 'Куриные крылья в пивном маринаде с острым или BBQ соусом, сельдерей, сырный дип',
      price: '550₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/beb2ac24-1bf1-4333-b368-6af9963f6aeb.jpg'
    },
    {
      name: 'Камамбер Гриль',
      description: 'Запечённый камамбер с клюквенным соусом, грецкими орехами и хрустящим багетом',
      price: '620₽',
      image: 'https://cdn.poehali.dev/projects/f531f220-7c49-4be5-9efa-fdb9e6a78b14/files/149bf3de-0685-4e35-8bae-71b68277bec1.jpg'
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

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Невероятная атмосфера! Пивные коктейли просто огонь, особенно "Лофт Мьюл". Обязательно вернусь!',
      date: '25 ноября 2024'
    },
    {
      name: 'Дмитрий Соколов',
      rating: 5,
      text: 'Стейк Рибай - лучший, что я пробовал в городе. Прожарка идеальная, а интерьер в стиле лофт создаёт особую атмосферу.',
      date: '18 ноября 2024'
    },
    {
      name: 'Мария Краснова',
      rating: 5,
      text: 'Были на джазовом вечере - восторг! Музыка, кухня, обслуживание - всё на высшем уровне. С собакой тоже можно, это большой плюс!',
      date: '10 ноября 2024'
    },
    {
      name: 'Алексей Морозов',
      rating: 5,
      text: 'Отличное место для встреч с друзьями. Бургер "Наш" действительно заслуживает своего названия - вкуснейший! Рекомендую.',
      date: '2 ноября 2024'
    }
  ];

  const events = [
    {
      date: '5 декабря',
      day: 'Четверг',
      time: '20:00',
      title: 'Джазовый вечер',
      description: 'Живая музыка от трио "Медный саксофон". Импровизации в стиле swing и bebop',
      type: 'music',
      tag: 'Live Music'
    },
    {
      date: '7 декабря',
      day: 'Суббота',
      time: '19:00',
      title: 'Дегустация крафтового пива',
      description: 'Знакомство с 8 сортами пива от локальных пивоварен. Сомелье расскажет о культуре пивоварения',
      type: 'tasting',
      tag: 'Дегустация'
    },
    {
      date: '12 декабря',
      day: 'Четверг',
      time: '21:00',
      title: 'Stand-up вечер',
      description: 'Выступления молодых комиков. Юмор, импровизация и хорошее настроение гарантированы',
      type: 'comedy',
      tag: 'Stand-up'
    },
    {
      date: '14 декабря',
      day: 'Суббота',
      time: '18:00',
      title: 'Кулинарный мастер-класс',
      description: 'Наш шеф научит готовить фирменный бургер "Наш" и пивные крылышки',
      type: 'masterclass',
      tag: 'Мастер-класс'
    },
    {
      date: '19 декабря',
      day: 'Четверг',
      time: '20:00',
      title: 'Вечер электроники',
      description: 'DJ-сет от местного диджея. Dub, techno, ambient в уютной атмосфере лофта',
      type: 'music',
      tag: 'DJ Set'
    },
    {
      date: '21 декабря',
      day: 'Суббота',
      time: '17:00',
      title: 'Вечер настольных игр',
      description: 'Большая коллекция настолок, дружеская атмосфера и специальное игровое меню',
      type: 'games',
      tag: 'Игры'
    }
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
              Забронировать столик
            </Button>
            <Dialog open={isEventsOpen} onOpenChange={setIsEventsOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Узнать программу мероприятий
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-primary mb-2">
                    Афиша мероприятий
                  </DialogTitle>
                  <p className="text-muted-foreground">Предстоящие события в НАШ БАР</p>
                </DialogHeader>
                <div className="grid gap-4 mt-6">
                  {events.map((event, idx) => (
                    <Card key={idx} className="bg-background border-border hover:border-primary transition-all duration-300 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-shrink-0 text-center md:text-left">
                            <div className="text-4xl font-bold text-accent">{event.date.split(' ')[0]}</div>
                            <div className="text-sm text-muted-foreground">{event.date.split(' ')[1]}</div>
                            <div className="text-sm text-muted-foreground mt-1">{event.day}</div>
                            <Badge className="mt-2 bg-primary">{event.tag}</Badge>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-2xl font-semibold text-primary">{event.title}</h3>
                              <div className="flex items-center text-accent ml-4">
                                <Icon name="Clock" size={18} className="mr-1" />
                                <span className="font-semibold">{event.time}</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground">{event.description}</p>
                            <Button className="mt-4 bg-accent hover:bg-accent/90">
                              Забронировать место
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
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

      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-primary">Отзывы гостей</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {reviews.map((review, idx) => (
              <Card key={idx} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{review.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{review.text}</p>
                  <p className="text-sm text-muted-foreground/70">{review.date}</p>
                </CardContent>
              </Card>
            ))}
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