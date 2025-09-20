import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-padre-navy via-padre-navy to-padre-blue">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-padre-navy/80 backdrop-blur-lg border-b border-padre-blue/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-padre-orange">PADRE.GG</div>
          <div className="flex gap-6">
            <a href="#about" className="text-padre-white hover:text-padre-orange transition-colors">О padre</a>
            <a href="#contacts" className="text-padre-white hover:text-padre-orange transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black text-padre-white leading-none">
                  PADRE
                  <span className="block text-padre-orange">БЕЗБАШЕННЫЙ</span>
                </h1>
                <p className="text-xl text-padre-blue font-medium">
                  Владелец биржи • Crypto Pioneer • Безбашенный трейдер
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-padre-orange to-padre-blue hover:scale-105 transform transition-all text-white font-bold px-8 py-6 text-lg rounded-xl">
                  <Icon name="TrendingUp" className="mr-2" />
                  Перейти на padre.gg
                </Button>
                <Button variant="outline" className="border-padre-blue text-padre-blue hover:bg-padre-blue hover:text-white font-bold px-8 py-6 text-lg rounded-xl">
                  <Icon name="MessageCircle" className="mr-2" />
                  Написать padre
                </Button>
              </div>
              
              <div className="flex gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-padre-orange">∞</div>
                  <div className="text-sm text-padre-blue">Безбашенность</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-padre-orange">24/7</div>
                  <div className="text-sm text-padre-blue">Трейдинг</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-padre-orange">#1</div>
                  <div className="text-sm text-padre-blue">Биржа</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-padre-orange to-padre-blue rounded-3xl blur-2xl opacity-30 scale-110"></div>
                <img 
                  src="/img/652bcf3b-4ec5-4cc6-90a0-d52ac966ecfb.jpg" 
                  alt="Padre - безбашенный кот трейдер" 
                  className="relative z-10 w-full rounded-3xl shadow-2xl border-4 border-padre-orange/50"
                />
                <div className="absolute -bottom-4 -right-4 bg-padre-orange text-padre-navy px-6 py-3 rounded-2xl font-bold text-lg shadow-xl">
                  padre.gg
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-padre-white/5 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-center text-padre-white mb-16">
              О <span className="text-padre-orange">PADRE</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-padre-navy/50 border-padre-blue/30 backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="Zap" className="text-padre-orange" size={32} />
                    <h3 className="text-2xl font-bold text-padre-white">Безбашенный характер</h3>
                  </div>
                  <p className="text-padre-blue leading-relaxed">
                    Padre — это не просто кот, это легенда криптомира. Его безбашенный подход к трейдингу 
                    и уникальное чутье на рынок сделали его одной из самых ярких фигур в индустрии.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-padre-navy/50 border-padre-blue/30 backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="Building" className="text-padre-orange" size={32} />
                    <h3 className="text-2xl font-bold text-padre-white">Владелец padre.gg</h3>
                  </div>
                  <p className="text-padre-blue leading-relaxed">
                    Под руководством padre биржа padre.gg стала одной из самых инновационных платформ 
                    для торговли криптовалютами, известной своим дерзким подходом и надежностью.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-padre-navy/50 border-padre-blue/30 backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="Target" className="text-padre-orange" size={32} />
                    <h3 className="text-2xl font-bold text-padre-white">Философия успеха</h3>
                  </div>
                  <p className="text-padre-blue leading-relaxed">
                    "Будь безбашенным, но умным" — девиз padre. Он верит, что только смелые решения 
                    и готовность к риску могут привести к выдающимся результатам в крипто-индустрии.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-padre-navy/50 border-padre-blue/30 backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="Rocket" className="text-padre-orange" size={32} />
                    <h3 className="text-2xl font-bold text-padre-white">Будущее крипто</h3>
                  </div>
                  <p className="text-padre-blue leading-relaxed">
                    Padre продолжает развивать экосистему padre.gg, создавая новые инструменты и 
                    возможности для трейдеров, которые разделяют его безбашенную философию успеха.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-black text-padre-white mb-16">
              <span className="text-padre-orange">КОНТАКТЫ</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-padre-orange to-padre-blue p-1 rounded-2xl">
                <CardContent className="bg-padre-navy rounded-xl p-8 h-full">
                  <Icon name="Globe" className="text-padre-orange mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-padre-white mb-4">Биржа padre.gg</h3>
                  <p className="text-padre-blue mb-6">
                    Основная платформа для торговли и инвестиций
                  </p>
                  <Button className="w-full bg-padre-orange hover:bg-padre-orange/90 text-padre-navy font-bold">
                    Перейти на сайт
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-padre-blue to-padre-turquoise p-1 rounded-2xl">
                <CardContent className="bg-padre-navy rounded-xl p-8 h-full">
                  <Icon name="MessageSquare" className="text-padre-blue mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-padre-white mb-4">Прямая связь</h3>
                  <p className="text-padre-blue mb-6">
                    Связаться с padre для обсуждения сотрудничества
                  </p>
                  <Button className="w-full bg-padre-blue hover:bg-padre-blue/90 text-white font-bold">
                    Написать сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-6">
              <Button variant="outline" size="lg" className="border-padre-orange text-padre-orange hover:bg-padre-orange hover:text-padre-navy rounded-full">
                <Icon name="Twitter" className="mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="lg" className="border-padre-blue text-padre-blue hover:bg-padre-blue hover:text-white rounded-full">
                <Icon name="Send" className="mr-2" />
                Telegram
              </Button>
              <Button variant="outline" size="lg" className="border-padre-turquoise text-padre-turquoise hover:bg-padre-turquoise hover:text-padre-navy rounded-full">
                <Icon name="Mail" className="mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-padre-blue/20 bg-padre-navy/50">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-padre-orange mb-2">PADRE.GG</div>
          <p className="text-padre-blue">
            © 2024 padre — Безбашенный владелец биржи
          </p>
        </div>
      </footer>
    </div>
  );
}