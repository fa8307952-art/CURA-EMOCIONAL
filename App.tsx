
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Star,
  Quote,
  Flame,
  Gem,
  Flower2,
  ArrowRight,
  BookOpen,
  Lock,
  CloudRain,
  EyeOff,
  UserMinus,
  Scale,
  Waves,
  Compass,
  Zap,
  Layout,
  Smartphone,
  CalendarDays,
  Users,
  Target,
  Sun
} from 'lucide-react';

// --- Constants ---
const CHECKOUT_URL = 'https://pay.kiwify.com.br/o2hBDUm';

// --- Components ---

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 14,
    seconds: 48
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-rose-600 text-white py-2 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-center items-center gap-2 font-semibold tracking-wider">
        <Clock size={18} className="animate-pulse" />
        <span>OFERTA ESPECIAL EXPIRA EM:</span>
        <span className="text-xl font-mono bg-white/20 px-2 py-0.5 rounded">
          {format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}
        </span>
      </div>
    </div>
  );
};

const SectionTitle = ({ children, subtitle, light = false }: { children?: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-5xl font-serif mb-4 ${light ? 'text-white' : 'text-slate-800'}`}>
      {children}
    </h2>
    {subtitle && <p className={`text-lg max-w-2xl mx-auto italic ${light ? 'text-rose-100' : 'text-slate-600'}`}>{subtitle}</p>}
    <div className={`h-1 w-24 mx-auto mt-6 rounded-full ${light ? 'bg-rose-300' : 'bg-rose-200'}`}></div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-rose-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-slate-800 pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-rose-500" /> : <ChevronDown className="text-rose-400" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const handleCheckout = () => {
    // Track conversion event for Meta Pixel
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen">
      <CountdownTimer />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 gradient-feminine border-b border-rose-100">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-rose-100 text-rose-600 font-bold text-sm mb-8 animate-pulse border border-rose-200 shadow-sm uppercase tracking-widest">
              <Sparkles size={16} />
              Cura do Feminino em 30 Dias
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-800 leading-tight mb-8">
              Reorganize emoções, fortaleça sua identidade e <span className="italic text-rose-600">sustente suas decisões sem culpa.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
              O mapa completo para resgatar sua essência feminina e viver com plenitude através de um método validado de 30 dias.
            </p>
            <button 
              onClick={handleCheckout}
              className="btn-primary text-white text-xl md:text-2xl font-black py-8 px-14 rounded-full shadow-2xl flex items-center gap-3 mx-auto"
            >
              SIM, QUERO MINHA TRANSFORMAÇÃO
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* The Truth Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3867382/pexels-photo-3867382.jpeg" 
                  alt="Mulher contemplando" 
                  className="rounded-3xl shadow-2xl grayscale-[20%] w-full h-auto object-cover"
                />
                <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border-rose-200 border">
                  <Heart className="text-rose-500 mb-2" fill="#f43f5e" />
                  <p className="italic text-slate-700 font-medium">"Sua essência não foi perdida. Ela apenas está esperando ser despertada."</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-8 leading-snug">
                A Verdade Que <span className="text-rose-600 italic">Ninguém Te Conta</span> Sobre Ser Mulher
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>Durante anos, você colocou as necessidades de todos acima das suas. Abraçou crenças limitantes como se foram verdades absolutas.</p>
                <p>E, no meio desse turbilhão, <strong>perdeu o contato com a mulher poderosa que sempre foi</strong>.</p>
                <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-400">
                  <p className="text-rose-800 font-medium italic">O mundo te ensinou a ser útil, mas esqueceu de te ensinar a ser VOCÊ.</p>
                </div>
                <p>Nos próximos 30 dias, você terá o mapa completo para reorganizar sua estrutura emocional e resgatar sua voz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DO YOU FEEL LIKE THIS? Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-rose-100">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Heart size={400} />
        </div>
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Pare por um segundo e seja honesta com você mesma:">Você Se Sente Assim?</SectionTitle>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-50 hover:shadow-md transition-shadow">
              <CloudRain className="text-rose-400 mb-6" size={40} />
              <p className="text-slate-700 leading-relaxed">
                Você acorda e já sente aquele peso no peito? Como se estivesse vivendo no automático, cumprindo papéis, mas sentindo que perdeu algo precioso pelo caminho?
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-50 hover:shadow-md transition-shadow">
              <EyeOff className="text-rose-400 mb-6" size={40} />
              <p className="text-slate-700 leading-relaxed">
                Você olha no espelho e não reconhece a mulher que te encara de volta? Onde foi parar aquela menina cheia de sonhos, aquela mulher vibrante que você prometeu ser?
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-50 hover:shadow-md transition-shadow">
              <UserMinus className="text-rose-400 mb-6" size={40} />
              <p className="text-slate-700 leading-relaxed">
                Você se doa tanto pelos outros que esqueceu como é se priorizar sem culpa? E quando finalmente tenta fazer algo por você, aquela voz interna sussurra: "Você é egoísta"?
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-50 hover:shadow-md transition-shadow">
              <Scale className="text-rose-400 mb-6" size={40} />
              <p className="text-slate-700 leading-relaxed">
                Você sente que sua autoestima está no chão? Compara-se com outras mulheres e sempre se sente "menos"? Insegura, invisível, insuficiente?
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-50 hover:shadow-md transition-shadow">
              <Waves className="text-rose-400 mb-6" size={40} />
              <p className="text-slate-700 leading-relaxed">
                Você carrega mágoas do passado que simplesmente não consegue deixar ir? Dores antigas que voltam sempre, te lembrando de feridas que ainda não cicatrizaram?
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-50 hover:shadow-md transition-shadow">
              <Compass className="text-rose-400 mb-6" size={40} />
              <p className="text-slate-700 leading-relaxed">
                Você quer se conectar com sua essência feminina, mas não sabe nem por onde começar?
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-slate-800 italic">
              Se você respondeu <span className="text-rose-600 font-bold">"sim"</span> para qualquer uma dessas perguntas, <br className="hidden md:block" /> saiba que você não está sozinha e que a mudança começa aqui.
            </h3>
          </div>
        </div>
      </section>

      {/* THE METHOD SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-8 leading-tight">
                Um Método Desenhado <br /> <span className="text-rose-600 italic">Para Sua Vida Real</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  O <strong>Guia de 30 Dias para Cura do Feminino</strong> não é apenas mais um e-book. É uma metodologia viva, baseada em anos de prática clínica e estudos sistêmicos, desenhada para mulheres que não têm tempo a perder.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-3">
                    <Zap className="text-rose-500 shrink-0" size={24} />
                    <p className="text-sm"><strong>Ação Diária:</strong> Exercícios de 15 minutos que cabem na sua rotina.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="text-rose-500 shrink-0" size={24} />
                    <p className="text-sm"><strong>Abordagem Sistêmica:</strong> Olhamos para a raiz do problema, não apenas para o sintoma.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gem className="text-rose-500 shrink-0" size={24} />
                    <p className="text-sm"><strong>Resultados Reais:</strong> Uma mudança gradual, mas profunda e duradoura.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarDays className="text-rose-500 shrink-0" size={24} />
                    <p className="text-sm"><strong>Cronograma Claro:</strong> Você nunca ficará perdida sobre o que fazer a seguir.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-rose-100 absolute -inset-4 rounded-[3rem] transform rotate-3 -z-10"></div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-rose-50">
                <blockquote className="text-2xl font-serif text-slate-800 italic mb-6">
                  "Eu criei esse método porque vi milhares de mulheres perdidas em teorias que não mudavam sua realidade prática. Aqui, nós vamos direto ao ponto: a sua liberdade emocional."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-200"></div>
                  <p className="font-bold text-slate-700">Amanda Silva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIDE THE MEMBERS AREA SECTION */}
      <section className="py-24 gradient-feminine">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Tudo organizado em uma plataforma intuitiva para você acessar de onde quiser.">
            O Que Tem Dentro da Área de Membros?
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Module 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-xl flex flex-col group hover:-translate-y-2 transition-transform">
              <div className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6 shadow-md">01</div>
              <h4 className="text-xl font-serif font-bold text-slate-800 mb-4 group-hover:text-rose-600 transition-colors">Fundamentos da Cura</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">A base de tudo. Entenda como as feridas emocionais se formam e como começar a desconstruir os muros que você criou ao seu redor.</p>
              <ul className="text-xs text-rose-600 font-bold space-y-2 border-t border-rose-100 pt-4">
                <li>• Diagnóstico Emocional</li>
                <li>• Anatomia da Essência</li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-xl flex flex-col group hover:-translate-y-2 transition-transform">
              <div className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6 shadow-md">02</div>
              <h4 className="text-xl font-serif font-bold text-slate-800 mb-4 group-hover:text-rose-600 transition-colors">A Criança Interior</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Resgate a menina que ficou esquecida. Curar o passado é a única forma de viver um presente pleno e sem as correntes da insegurança.</p>
              <ul className="text-xs text-rose-600 font-bold space-y-2 border-t border-rose-100 pt-4">
                <li>• Exercícios de Reencontro</li>
                <li>• Quebra de Ciclos Familiares</li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-xl flex flex-col group hover:-translate-y-2 transition-transform">
              <div className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6 shadow-md">03</div>
              <h4 className="text-xl font-serif font-bold text-slate-800 mb-4 group-hover:text-rose-600 transition-colors">Relacionamentos e Limites</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Como se relacionar a partir da sua força, não da sua carência. Aprenda a colocar limites saudáveis sem sentir que está sendo egoísta.</p>
              <ul className="text-xs text-rose-600 font-bold space-y-2 border-t border-rose-100 pt-4">
                <li>• Diálogos de Poder</li>
                <li>• A Arte do "Não" Sagrado</li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-xl flex flex-col group hover:-translate-y-2 transition-transform">
              <div className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6 shadow-md">04</div>
              <h4 className="text-xl font-serif font-bold text-slate-800 mb-4 group-hover:text-rose-600 transition-colors">Manifestação e Poder</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Ative a mulher vibrante e segura que você nasceu para ser. Ferramentas práticas para manifestar sua verdade no mundo real.</p>
              <ul className="text-xs text-rose-600 font-bold space-y-2 border-t border-rose-100 pt-4">
                <li>• Visualizações Criativas</li>
                <li>• Plano de Ação Autêntico</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-700 font-bold text-sm">
            <div className="flex items-center gap-2">
              <Smartphone className="text-rose-500" /> Acesso pelo Celular
            </div>
            <div className="flex items-center gap-2">
              <Layout className="text-rose-500" /> Área de Membros Premium
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-rose-500" /> Segurança Hotmart/Kiwify
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS THIS GUIDE FOR SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Este guia foi desenhado especificamente para perfis de mulheres que buscam algo real.">
            Para Quem é Este Guia de Cura?
          </SectionTitle>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="flex gap-4 p-6 bg-rose-50 rounded-3xl border border-rose-100 hover:bg-rose-100 transition-colors group">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Mulheres "Perdidas"</h4>
                <p className="text-sm text-slate-600">Para quem sente que vive no piloto automático e esqueceu seus próprios desejos e sonhos.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-rose-50 rounded-3xl border border-rose-100 hover:bg-rose-100 transition-colors group">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm group-hover:scale-110 transition-transform">
                <Scale size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Quem Não Sabe Dizer Não</h4>
                <p className="text-sm text-slate-600">Se você se anula para agradar os outros e carrega uma culpa constante ao tentar se priorizar.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-rose-50 rounded-3xl border border-rose-100 hover:bg-rose-100 transition-colors group">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Vítimas de Baixa Autoestima</h4>
                <p className="text-sm text-slate-600">Para quem se compara o tempo todo e nunca se sente boa ou bonita o suficiente.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-rose-50 rounded-3xl border border-rose-100 hover:bg-rose-100 transition-colors group">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm group-hover:scale-110 transition-transform">
                <Waves size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Buscadoras de Alívio</h4>
                <p className="text-sm text-slate-600">Mulheres que querem transmutar dores do passado e mágoas que ainda travam o seu presente.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-rose-50 rounded-3xl border border-rose-100 hover:bg-rose-100 transition-colors group">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Desejosas de Reconexão</h4>
                <p className="text-sm text-slate-600">Para quem sente o chamado de resgatar sua ciclicidade e essência feminina ancestral.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-rose-50 rounded-3xl border border-rose-100 hover:bg-rose-100 transition-colors group">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm group-hover:scale-110 transition-transform">
                <Gem size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Focadas em Evolução</h4>
                <p className="text-sm text-slate-600">Mulheres que sabem que merecem mais da vida e estão prontas para investir na sua melhor versão.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGINE YOUR LIFE Section */}
      <section className="py-24 bg-rose-50 overflow-hidden relative border-y border-rose-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle subtitle="Dê permissão para sua mente viajar um pouco no futuro...">
            Imagine Sua Vida Daqui a 30 Dias...
          </SectionTitle>
          
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-rose-100 relative z-10">
            <div className="grid gap-8">
              <div className="flex gap-5 items-start">
                <div className="bg-green-100 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  Acordando com clareza sobre quem você é e o que realmente importa para você
                </p>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="bg-green-100 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  Olhando no espelho e sentindo orgulho da mulher que vê refletida
                </p>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="bg-green-100 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  Dizendo "não" sem culpa e "sim" para o que nutre sua alma
                </p>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="bg-green-100 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  Sentindo aquela paz interior que vem de estar alinhada com sua verdade
                </p>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="bg-green-100 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  Tendo ferramentas reais para lidar com emoções difíceis quando elas aparecerem
                </p>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-rose-50 text-center">
               <p className="text-2xl font-serif text-slate-800 italic leading-relaxed">
                "Isso não é fantasia. É o que acontece quando você se compromete com sua cura."
               </p>
               <div className="mt-8">
                 <button 
                  onClick={handleCheckout}
                  className="inline-flex items-center gap-2 text-rose-600 font-bold hover:gap-4 transition-all"
                 >
                  EU QUERO VIVER ESSA REALIDADE AGORA <ArrowRight size={20} />
                 </button>
               </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 opacity-10 -translate-y-1/2 hidden lg:block">
          <Sun size={200} className="text-rose-400" />
        </div>
      </section>

      {/* Bonus Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Além da jornada de 30 dias, você receberá bônus exclusivos para acelerar sua cura.">Bônus Exclusivos de Alto Valor</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-rose-100 flex flex-col items-center text-center group hover:bg-rose-50/50 transition-colors">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
                  <Lock size={40} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Ebook 1: Como Criar Limites Sem Culpa</h3>
                <p className="text-slate-600 mb-6 italic font-medium">Bônus extremamente valorizado.</p>
                <p className="text-slate-600 mb-6">Aprenda a arte de dizer não, se escolher primeiro, parar de se anular e manter seu amor-próprio blindado contra manipulações externas.</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 text-sm font-semibold rounded-full">Dizer não</span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 text-sm font-semibold rounded-full">Se escolher</span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 text-sm font-semibold rounded-full">Amor-próprio</span>
                </div>
             </div>

             <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-rose-100 flex flex-col items-center text-center group hover:bg-rose-50/50 transition-colors">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={40} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Ebook 2: Cartas Sistêmicas para Cura do Feminino</h3>
                <p className="text-slate-600 mb-6">Uma ferramenta poderosa de autoconhecimento, autocuidado e reconexão com o sagrado feminino através de exercícios sistêmicos diários.</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 text-sm font-semibold rounded-full">Autocuidado</span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 text-sm font-semibold rounded-full">Sagrado Feminino</span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 text-sm font-semibold rounded-full">Sistêmica</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Single Premium Offer */}
      <section id="pricing" className="py-24 gradient-feminine">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Garanta acesso ao programa completo e todos os bônus por um valor simbólico hoje.">OFERTA PREMIUM</SectionTitle>
          
          <div className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border-4 border-rose-400 relative overflow-hidden">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-rose-500 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 z-20">
                <Star size={20} fill="white" /> OFERTA LIMITADA
              </div>

              <div className="text-center mb-10">
                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-2">Combo de Cura Completo</h3>
                <p className="text-rose-600 font-bold text-xl uppercase tracking-widest">Acesso Vitalício</p>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-start p-4 bg-rose-50 rounded-2xl border border-rose-100">
                  <CheckCircle2 className="text-rose-500 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-800">Guia de 30 Dias para Cura do Feminino:</span> A jornada passo a passo para sua libertação emocional.
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-rose-100">
                  <CheckCircle2 className="text-rose-500 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-800">BÔNUS 1: Guia Como Criar Limites Sem Culpa:</span> Aprenda a se priorizar sem medo do julgamento.
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-rose-100">
                  <CheckCircle2 className="text-rose-500 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-800">BÔNUS 2: Ebook Cartas Sistêmicas:</span> Ferramenta de reconexão sagrada e autocuidado.
                  </div>
                </div>
              </div>

              <div className="text-center mb-10">
                <span className="text-slate-400 line-through text-xl block mb-2">De R$ 197,00 por</span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-bold text-slate-800">R$</span>
                  <span className="text-8xl font-black text-rose-600 leading-none">10,00</span>
                </div>
                <p className="text-green-600 font-bold mt-4 bg-green-50 inline-block px-4 py-1 rounded-full text-sm uppercase tracking-tighter">PAGAMENTO ÚNICO - ACESSO IMEDIATO</p>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full btn-primary text-white py-8 rounded-3xl font-black text-2xl shadow-xl animate-pulse flex items-center justify-center gap-3"
              >
                QUERO MEU ACESSO PREMIUM AGORA
                <ArrowRight size={28} />
              </button>
              
              <div className="mt-8 flex justify-center items-center gap-4 text-slate-400 text-sm">
                <div className="flex items-center gap-1">
                  <ShieldCheck size={16} /> Compra 100% Segura
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <div>Garantia de 7 dias</div>
              </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Veja o impacto real na vida de quem já trilhou este caminho.">
            O Que Outras Mulheres Estão Dizendo:
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-rose-50/50 p-8 rounded-[2.5rem] border border-rose-100 relative group hover:bg-rose-50 transition-colors">
              <div className="flex gap-1 text-rose-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic leading-relaxed mb-8 text-lg font-serif">
                "Eu não fazia ideia de quanto estava desconectada de mim mesma. Este guia me deu de volta algo que eu nem sabia que tinha perdido: minha própria voz. Hoje me permito sentir, me permito ser imperfeita, me permito VIVER."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                  alt="Mariah Zorzanello" 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-800">Mariah Zorzanello</h4>
                  <p className="text-sm text-slate-500">34 anos</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-rose-50/50 p-8 rounded-[2.5rem] border border-rose-100 relative group hover:bg-rose-50 transition-colors">
              <div className="flex gap-1 text-rose-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic leading-relaxed mb-8 text-lg font-serif">
                "Nos primeiros 10 dias eu chorei muito. Mas não era tristeza, era libertação. Pela primeira vez em anos, senti que poderia me perdoar e seguir em frente. Hoje estou no dia 28 e sou outra mulher."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=150&auto=format&fit=crop" 
                  alt="Ana Julia Vasconcelos" 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-800">Ana Julia Vasconcelos</h4>
                  <p className="text-sm text-slate-500">41 anos</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-rose-50/50 p-8 rounded-[2.5rem] border border-rose-100 relative group hover:bg-rose-50 transition-colors">
              <div className="flex gap-1 text-rose-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic leading-relaxed mb-8 text-lg font-serif">
                "O preço é ridiculamente acessível para o valor que entrega. Gastei mais com coisas que não mudaram nada na minha vida. Este guia? Mudou TUDO."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
                  alt="Jane Martins" 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-800">Jane Martins</h4>
                  <p className="text-sm text-slate-500">29 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section - Amanda Silva */}
      <section className="py-24 bg-white border-t border-rose-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">
            <div className="md:w-1/3 text-center">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop" alt="Amanda Silva" className="rounded-[4rem] border-8 border-rose-50 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 mx-auto" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-4xl font-serif text-slate-800 mb-6">Conheça Amanda Silva</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Olá, querida. Sou Amanda Silva, terapeuta holística e mentora de mulheres apaixonada pelo despertar da alma feminina. Minha trajetória é dedicada a ajudar mulheres a quebrarem ciclos de dependência emocional e redescobrirem o brilho que a rotina e as dores do passado tentaram apagar.
                </p>
                <p>
                  Através da visão sistêmica e de ferramentas práticas de inteligência emocional, desenvolvi este método para ser o seu refúgio e o seu trampolim. Acredito que toda mulher possui uma força ancestral que, quando curada, é capaz de transformar não só a sua vida, mas todo o seu entorno.
                </p>
                <p className="text-slate-800 font-serif text-2xl italic mt-8">
                  "Minha missão é ser a ponte entre quem você é hoje e a mulher livre, plena e segura que você nasceu para ser."
                </p>
              </div>
              <div className="mt-8">
                <p className="text-rose-600 font-serif italic text-4xl">Amanda Silva</p>
                <p className="text-slate-400 font-medium tracking-widest uppercase text-xs mt-1">Terapeuta & Mentora do Feminino</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0">
              <ShieldCheck size={160} className="text-rose-500" strokeWidth={1} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Risco Zero: Garantia Incondicional</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Estou tão segura do valor que este material entregará à sua vida que ofereço uma garantia total. Use o guia, aplique os bônus e, se em 7 dias você sentir que não é para você, devolvo 100% do seu valor.
              </p>
              <div className="flex items-center gap-4 text-rose-400 font-bold uppercase tracking-wider text-sm">
                <CheckCircle2 size={20} /> COMPROMISSO TOTAL COM SUA SATISFAÇÃO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle>Dúvidas Comuns</SectionTitle>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-50">
            <FAQItem 
              question="Quanto tempo por dia preciso dedicar?"
              answer="Entre 15-30 minutos diários são suficientes para realizar as leituras e exercícios propostos."
            />
            <FAQItem 
              question="Vou receber os bônus agora?"
              answer="Sim! Imediatamente após a confirmação do pagamento no checkout, você recebe o acesso ao Guia principal e aos dois Ebooks bônus via e-mail."
            />
            <FAQItem 
              question="O acesso é vitalício?"
              answer="Sim, o material é seu para sempre. Você pode baixar e consultar sempre que sentir necessidade de se reconectar."
            />
            <FAQItem 
              question="O pagamento de R$ 10,00 é mensal?"
              answer="Não. É um pagamento único. Sem mensalidades ou taxas escondidas."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 gradient-feminine text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-8">Sua nova vida começa com um passo.</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Por apenas R$ 10,00 você tem em mãos as ferramentas que levaram anos para serem compiladas. Não deixe para amanhã a paz que você pode sentir hoje.
          </p>
          <button 
            onClick={handleCheckout}
            className="btn-primary text-white text-2xl font-black py-8 px-16 rounded-full shadow-2xl transition-all"
          >
            QUERO MEU ACESSO PREMIUM AGORA
          </button>
          <p className="mt-8 text-slate-500 font-medium">Você será redirecionada para um checkout 100% seguro da Kiwify</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-rose-50 text-slate-400 text-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2025 - Todos os Direitos Reservados | Amanda Silva</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-rose-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
