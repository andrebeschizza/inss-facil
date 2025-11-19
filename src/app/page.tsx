"use client";

import { useState } from "react";
import { 
  Home, 
  User, 
  MessageCircle, 
  FileText, 
  Shield, 
  Info, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  Users,
  Play,
  Volume2,
  Lock,
  Zap,
  Heart,
  Phone,
  Calendar,
  Clock,
  ArrowRight,
  Check,
  ChevronDown,
  AlertCircle,
  Settings
} from "lucide-react";

type Screen = 
  | "welcome" 
  | "home" 
  | "register" 
  | "profile" 
  | "assistant" 
  | "checklist" 
  | "services" 
  | "plans" 
  | "help";

export default function INSSFacil() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPlan, setUserPlan] = useState<"free" | "basic" | "premium" | "vip">("free");
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [badges, setBadges] = useState<string[]>([]);

  // Navegação
  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    setMenuOpen(false);
  };

  // Tela de Boas-vindas
  if (currentScreen === "welcome") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D]">
        <div className="max-w-md w-full space-y-8 text-center animate-fade-in">
          {/* Logo */}
          <div className="space-y-4">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#005AA6] to-[#003d73] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#005AA6]/20 transform hover:scale-105 transition-transform duration-300">
              <Shield className="w-12 h-12 text-[#FFD700]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFF] to-[#005AA6] bg-clip-text text-transparent">
              INSS Fácil
            </h1>
            <p className="text-lg text-gray-400">
              Seus direitos ao alcance das mãos
            </p>
          </div>

          {/* Benefícios */}
          <div className="space-y-4 py-8">
            {[
              { icon: Shield, text: "Suporte completo e acessível" },
              { icon: Zap, text: "Respostas rápidas e precisas" },
              { icon: Heart, text: "Feito para você" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#005AA6]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#005AA6]/20 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#FFD700]" />
                </div>
                <p className="text-white/90">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Botão de Início */}
          <button
            onClick={() => navigate("register")}
            className="w-full py-4 px-6 bg-gradient-to-r from-[#005AA6] to-[#0077cc] text-white font-semibold rounded-2xl shadow-lg shadow-[#005AA6]/30 hover:shadow-[#005AA6]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-sm text-gray-500">
            Gratuito para começar • Sem cartão de crédito
          </p>
        </div>
      </div>
    );
  }

  // Tela de Cadastro
  if (currentScreen === "register") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0D0D0D]">
        <div className="max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">Criar Conta</h2>
            <p className="text-gray-400">Preencha seus dados para começar</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Digite seu nome"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005AA6] focus:ring-2 focus:ring-[#005AA6]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                CPF
              </label>
              <input
                type="text"
                placeholder="000.000.000-00"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005AA6] focus:ring-2 focus:ring-[#005AA6]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Data de Nascimento
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#005AA6] focus:ring-2 focus:ring-[#005AA6]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005AA6] focus:ring-2 focus:ring-[#005AA6]/20 transition-all"
              />
            </div>

            {/* Acessibilidade */}
            <div className="p-4 bg-[#005AA6]/10 border border-[#005AA6]/30 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">
                    Possui alguma necessidade especial?
                  </p>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-[#005AA6] focus:ring-[#005AA6]" />
                    <span className="text-sm text-gray-400">Ativar recursos de acessibilidade</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (userName) {
                navigate("home");
              }
            }}
            disabled={!userName}
            className="w-full py-4 px-6 bg-gradient-to-r from-[#005AA6] to-[#0077cc] text-white font-semibold rounded-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[#005AA6]/50 hover:scale-105 transition-all duration-300"
          >
            Criar Conta
          </button>

          <button
            onClick={() => navigate("welcome")}
            className="w-full py-3 text-gray-400 hover:text-white transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  // Menu Lateral
  const menuItems = [
    { icon: Home, label: "Início", screen: "home" as Screen },
    { icon: User, label: "Meu Perfil", screen: "profile" as Screen },
    { icon: MessageCircle, label: "Dr. INSS", screen: "assistant" as Screen },
    { icon: FileText, label: "Passo a Passo", screen: "checklist" as Screen },
    { icon: Star, label: "Serviços Premium", screen: "services" as Screen },
    { icon: Shield, label: "Planos", screen: "plans" as Screen },
    { icon: Info, label: "Ajuda", screen: "help" as Screen },
  ];

  // Header com Menu
  const Header = () => (
    <header className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-lg border-b border-white/10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-white/5 rounded-xl transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#005AA6] to-[#003d73] rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#FFD700]" />
            </div>
            <span className="font-bold text-lg">INSS Fácil</span>
          </div>
        </div>
        
        {userName && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full">
            <div className="w-6 h-6 bg-[#005AA6] rounded-full flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <span className="text-sm hidden sm:inline">{userName.split(' ')[0]}</span>
          </div>
        )}
      </div>

      {/* Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0D0D0D]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.screen}
                onClick={() => navigate(item.screen)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                  currentScreen === item.screen
                    ? "bg-[#005AA6] text-white"
                    : "hover:bg-white/5 text-gray-300"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {currentScreen === item.screen && (
                  <Check className="w-4 h-4 ml-auto" />
                )}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );

  // Tela Home (Dashboard)
  if (currentScreen === "home") {
    return (
      <div className="min-h-screen bg-[#0D0D0D]">
        <Header />
        
        <main className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
          {/* Saudação */}
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold">
              Olá, {userName || "Bem-vindo"}! 👋
            </h1>
            <p className="text-gray-400">
              Aqui está um resumo dos seus benefícios e serviços
            </p>
          </div>

          {/* Cards de Ação Rápida */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: MessageCircle,
                title: "Dr. INSS",
                description: "Tire suas dúvidas agora",
                color: "from-[#005AA6] to-[#0077cc]",
                action: () => navigate("assistant")
              },
              {
                icon: FileText,
                title: "Passo a Passo",
                description: "Guias completos",
                color: "from-[#FFD700] to-[#FFA500]",
                action: () => navigate("checklist")
              },
              {
                icon: Shield,
                title: "Meus Planos",
                description: "Gerencie sua assinatura",
                color: "from-purple-600 to-purple-800",
                action: () => navigate("plans")
              }
            ].map((card, idx) => (
              <button
                key={idx}
                onClick={card.action}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#005AA6]/50 transition-all duration-300 text-left hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.description}</p>
                <ChevronRight className="w-5 h-5 text-[#005AA6] mt-2 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>

          {/* Progresso e Gamificação */}
          <div className="bg-gradient-to-br from-[#005AA6]/20 to-[#003d73]/20 border border-[#005AA6]/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Suas Conquistas</h3>
              <Star className="w-5 h-5 text-[#FFD700]" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Cadastro Completo", earned: true },
                { label: "Primeira Consulta", earned: badges.includes("first-query") },
                { label: "Plano Ativo", earned: userPlan !== "free" },
                { label: "Comunidade", earned: false }
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl text-center transition-all ${
                    badge.earned
                      ? "bg-[#FFD700]/20 border border-[#FFD700]/50"
                      : "bg-white/5 border border-white/10 opacity-50"
                  }`}
                >
                  <div className="text-2xl mb-2">{badge.earned ? "🏆" : "🔒"}</div>
                  <p className="text-xs text-gray-300">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Serviços em Destaque */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Serviços Populares</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Calendar, title: "Agendamento", desc: "Agende atendimentos" },
                { icon: FileText, title: "Documentos", desc: "Organize seus arquivos" },
                { icon: Phone, title: "Telemedicina", desc: "Consultas online", premium: true },
                { icon: Users, title: "Comunidade", desc: "Compartilhe experiências" }
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#005AA6]/50 transition-all"
                >
                  <div className="w-12 h-12 bg-[#005AA6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{service.title}</h4>
                      {service.premium && (
                        <span className="px-2 py-0.5 bg-[#FFD700]/20 text-[#FFD700] text-xs rounded-full">
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{service.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Tela de Perfil
  if (currentScreen === "profile") {
    return (
      <div className="min-h-screen bg-[#0D0D0D]">
        <Header />
        
        <main className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
          {/* Header do Perfil */}
          <div className="bg-gradient-to-br from-[#005AA6]/20 to-[#003d73]/20 border border-[#005AA6]/30 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-[#005AA6] to-[#0077cc] rounded-full flex items-center justify-center text-3xl font-bold">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-1">{userName}</h2>
                <p className="text-gray-400 mb-3">Membro desde 2024</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    userPlan === "free" 
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black"
                  }`}>
                    Plano {userPlan === "free" ? "Gratuito" : userPlan.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 bg-[#005AA6]/20 text-[#005AA6] rounded-full text-sm font-medium">
                    {badges.length} Conquistas
                  </span>
                </div>
              </div>
              <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Informações Pessoais */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-lg mb-4">Informações Pessoais</h3>
            
            {[
              { label: "CPF", value: "***.***.***-**", icon: Shield },
              { label: "Data de Nascimento", value: "**/**/****", icon: Calendar },
              { label: "Telefone", value: "(00) *****-****", icon: Phone },
              { label: "E-mail", value: "usuario@email.com", icon: User }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-[#005AA6]" />
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
                <button className="text-[#005AA6] hover:text-[#0077cc] text-sm font-medium">
                  Editar
                </button>
              </div>
            ))}
          </div>

          {/* Preferências */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-lg mb-4">Preferências</h3>
            
            {[
              { label: "Notificações", enabled: true },
              { label: "Modo Escuro", enabled: true },
              { label: "Acessibilidade", enabled: false }
            ].map((pref, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <span className="font-medium">{pref.label}</span>
                <button
                  className={`w-12 h-6 rounded-full transition-all ${
                    pref.enabled ? "bg-[#005AA6]" : "bg-gray-700"
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    pref.enabled ? "translate-x-6" : "translate-x-1"
                  }`} />
                </button>
              </div>
            ))}
          </div>

          {/* Ações */}
          <div className="space-y-3">
            <button
              onClick={() => navigate("plans")}
              className="w-full p-4 bg-gradient-to-r from-[#005AA6] to-[#0077cc] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#005AA6]/30 transition-all"
            >
              Fazer Upgrade do Plano
            </button>
            <button className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 rounded-xl transition-all">
              Sair da Conta
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Tela Dr. INSS (Assistente Virtual)
  if (currentScreen === "assistant") {
    const [messages, setMessages] = useState([
      { role: "assistant", content: "Olá! Sou o Dr. INSS, seu assistente virtual. Como posso ajudar você hoje?" }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
      if (!input.trim()) return;
      
      setMessages([...messages, 
        { role: "user", content: input },
        { role: "assistant", content: "Entendi sua pergunta. Com base nas informações do INSS, posso te ajudar com isso..." }
      ]);
      setInput("");
      
      if (!badges.includes("first-query")) {
        setBadges([...badges, "first-query"]);
      }
    };

    return (
      <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
        <Header />
        
        <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
          {/* Header do Chat */}
          <div className="p-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#005AA6] to-[#0077cc] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold">Dr. INSS</h2>
                  <p className="text-sm text-gray-400">Assistente Virtual</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAudioEnabled(!audioEnabled)}
                  className={`p-2 rounded-xl transition-all ${
                    audioEnabled ? "bg-[#005AA6] text-white" : "bg-white/5 text-gray-400"
                  }`}
                  aria-label="Áudio"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                {userPlan === "free" && (
                  <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] text-xs rounded-full">
                    Limitado
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-[#005AA6] text-white"
                      : "bg-white/5 border border-white/10 text-gray-100"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Sugestões Rápidas */}
            {messages.length === 1 && (
              <div className="space-y-3 pt-4">
                <p className="text-sm text-gray-400 text-center">Perguntas frequentes:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Como solicitar aposentadoria?",
                    "Qual o valor do meu benefício?",
                    "Documentos necessários",
                    "Agendar atendimento"
                  ].map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(suggestion)}
                      className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-left transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-[#0D0D0D]">
            {userPlan === "free" && (
              <div className="mb-3 p-3 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-xl flex items-start gap-2">
                <Lock className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-300">
                  Você tem 3 perguntas restantes hoje. Faça upgrade para acesso ilimitado!
                </p>
              </div>
            )}
            
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Digite sua pergunta..."
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005AA6] focus:ring-2 focus:ring-[#005AA6]/20 transition-all"
              />
              <button
                onClick={sendMessage}
                className="px-6 py-3 bg-gradient-to-r from-[#005AA6] to-[#0077cc] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#005AA6]/30 transition-all"
              >
                Enviar
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Tela de Checklist (Passo a Passo)
  if (currentScreen === "checklist") {
    const checklists = [
      {
        title: "Aposentadoria por Idade",
        steps: [
          { text: "Verificar tempo de contribuição", done: true },
          { text: "Reunir documentos pessoais", done: true },
          { text: "Agendar atendimento no INSS", done: false },
          { text: "Protocolar pedido", done: false },
          { text: "Acompanhar processo", done: false }
        ]
      },
      {
        title: "Auxílio-Doença",
        steps: [
          { text: "Obter atestado médico", done: false },
          { text: "Fazer perícia médica", done: false },
          { text: "Aguardar resultado", done: false }
        ]
      },
      {
        title: "Pensão por Morte",
        steps: [
          { text: "Certidão de óbito", done: false },
          { text: "Documentos do falecido", done: false },
          { text: "Comprovante de dependência", done: false },
          { text: "Protocolar pedido", done: false }
        ]
      }
    ];

    return (
      <div className="min-h-screen bg-[#0D0D0D]">
        <Header />
        
        <main className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold">Passo a Passo</h1>
            <p className="text-gray-400">
              Guias completos para seus benefícios
            </p>
          </div>

          <div className="space-y-4">
            {checklists.map((checklist, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#005AA6]/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{checklist.title}</h3>
                  <span className="text-sm text-gray-400">
                    {checklist.steps.filter(s => s.done).length}/{checklist.steps.length}
                  </span>
                </div>

                {/* Barra de Progresso */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#005AA6] to-[#0077cc] transition-all duration-500"
                    style={{
                      width: `${(checklist.steps.filter(s => s.done).length / checklist.steps.length) * 100}%`
                    }}
                  />
                </div>

                {/* Steps */}
                <div className="space-y-2">
                  {checklist.steps.map((step, stepIdx) => (
                    <div
                      key={stepIdx}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                        step.done ? "bg-[#005AA6]/20" : "bg-white/5"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.done
                            ? "bg-[#005AA6] text-white"
                            : "bg-white/10 text-gray-500"
                        }`}
                      >
                        {step.done ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <span className="text-xs">{stepIdx + 1}</span>
                        )}
                      </div>
                      <span className={step.done ? "text-white" : "text-gray-400"}>
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-[#005AA6]/20 hover:bg-[#005AA6]/30 text-[#005AA6] font-medium rounded-xl transition-all flex items-center justify-center gap-2">
                  Ver Detalhes
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Vídeos Explicativos */}
          <div className="bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 border border-[#FFD700]/30 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-[#FFD700]" />
              Vídeos Explicativos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Como dar entrada na aposentadoria",
                "Documentos necessários",
                "Cálculo de benefícios",
                "Perícia médica"
              ].map((video, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#FFD700]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Play className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <span className="text-sm">{video}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Tela de Serviços Premium
  if (currentScreen === "services") {
    return (
      <div className="min-h-screen bg-[#0D0D0D]">
        <Header />
        
        <main className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-[#005AA6] to-[#003d73] rounded-2xl p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#FFD700] rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-[#005AA6]" />
            </div>
            <h1 className="text-3xl font-bold">Serviços Premium</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Transforme seu conhecimento e maximize seus benefícios! Assine e tenha acesso ilimitado aos nossos serviços premium.
            </p>
          </div>

          {/* Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: MessageCircle,
                title: "Dr. INSS Ilimitado",
                description: "Perguntas ilimitadas ao assistente virtual",
                features: ["Respostas instantâneas", "Suporte por áudio", "Histórico completo"],
                plan: "basic"
              },
              {
                icon: Phone,
                title: "Telemedicina",
                description: "Consultas médicas online",
                features: ["Médicos especializados", "Agendamento flexível", "Receitas digitais"],
                plan: "premium"
              },
              {
                icon: FileText,
                title: "Análise de Documentos",
                description: "Revisão profissional dos seus documentos",
                features: ["Verificação completa", "Correções sugeridas", "Garantia de aprovação"],
                plan: "premium"
              },
              {
                icon: Users,
                title: "Consultoria Especializada",
                description: "Atendimento personalizado com especialistas",
                features: ["Agendamento prioritário", "Plano personalizado", "Acompanhamento contínuo"],
                plan: "vip"
              },
              {
                icon: Calendar,
                title: "Agendamento Prioritário",
                description: "Fure a fila nos atendimentos",
                features: ["Horários exclusivos", "Remarcação grátis", "Lembretes automáticos"],
                plan: "premium"
              },
              {
                icon: Shield,
                title: "Garantia de Aprovação",
                description: "Suporte até a aprovação do seu benefício",
                features: ["Acompanhamento total", "Recursos inclusos", "Sem custos extras"],
                plan: "vip"
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#005AA6]/50 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#005AA6] to-[#0077cc] rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    service.plan === "basic"
                      ? "bg-blue-500/20 text-blue-400"
                      : service.plan === "premium"
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-[#FFD700]/20 text-[#FFD700]"
                  }`}>
                    {service.plan === "basic" ? "Básico" : service.plan === "premium" ? "Premium" : "VIP"}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#005AA6] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {userPlan === "free" ? (
                  <button
                    onClick={() => navigate("plans")}
                    className="w-full py-3 bg-gradient-to-r from-[#005AA6] to-[#0077cc] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#005AA6]/30 transition-all"
                  >
                    Assinar Agora
                  </button>
                ) : (
                  <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 rounded-xl transition-all">
                    Acessar Serviço
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 border border-[#FFD700]/30 rounded-2xl p-6 text-center">
            <h3 className="font-semibold text-xl mb-2">Ainda não é assinante?</h3>
            <p className="text-gray-300 mb-4">
              Escolha seu plano e tenha acesso a todos esses benefícios!
            </p>
            <button
              onClick={() => navigate("plans")}
              className="px-8 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#FFD700]/30 transition-all"
            >
              Ver Planos
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Tela de Planos
  if (currentScreen === "plans") {
    const plans = [
      {
        name: "Básico",
        price: "R$ 19,90",
        period: "/mês",
        color: "from-blue-600 to-blue-800",
        features: [
          "Dr. INSS com 50 perguntas/mês",
          "Guias passo a passo completos",
          "Notificações de prazos",
          "Suporte por e-mail",
          "Comunidade exclusiva"
        ],
        popular: false
      },
      {
        name: "Premium",
        price: "R$ 39,90",
        period: "/mês",
        color: "from-purple-600 to-purple-800",
        features: [
          "Dr. INSS ilimitado",
          "Telemedicina (2 consultas/mês)",
          "Análise de documentos",
          "Agendamento prioritário",
          "Suporte 24/7",
          "Desconto de 20% em serviços"
        ],
        popular: true
      },
      {
        name: "VIP",
        price: "R$ 79,90",
        period: "/mês",
        color: "from-[#FFD700] to-[#FFA500]",
        features: [
          "Tudo do Premium +",
          "Consultoria especializada",
          "Telemedicina ilimitada",
          "Garantia de aprovação",
          "Advogado parceiro",
          "Atendimento VIP",
          "Desconto de 40% em serviços"
        ],
        popular: false
      }
    ];

    return (
      <div className="min-h-screen bg-[#0D0D0D]">
        <Header />
        
        <main className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center space-y-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              Escolha Seu Plano
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Escolha seu plano hoje e receba suporte contínuo e benefícios excepcionais!
            </p>
          </div>

          {/* Planos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-white/5 border rounded-2xl p-6 space-y-6 transition-all hover:scale-105 ${
                  plan.popular
                    ? "border-[#005AA6] shadow-2xl shadow-[#005AA6]/20"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#005AA6] to-[#0077cc] text-white text-sm font-semibold rounded-full">
                    Mais Popular
                  </div>
                )}

                <div className="text-center space-y-2">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center`}>
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#005AA6] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setUserPlan(plan.name.toLowerCase() as any);
                    navigate("home");
                  }}
                  className={`w-full py-3 font-semibold rounded-xl transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#005AA6] to-[#0077cc] text-white hover:shadow-lg hover:shadow-[#005AA6]/30"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                  }`}
                >
                  {userPlan === plan.name.toLowerCase() ? "Plano Atual" : "Assinar Agora"}
                </button>
              </div>
            ))}
          </div>

          {/* Benefícios Extras */}
          <div className="bg-gradient-to-br from-[#005AA6]/20 to-[#003d73]/20 border border-[#005AA6]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              Todos os Planos Incluem
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Segurança Total", desc: "Seus dados protegidos" },
                { icon: Clock, title: "Suporte Rápido", desc: "Respostas em minutos" },
                { icon: Heart, title: "Sem Fidelidade", desc: "Cancele quando quiser" }
              ].map((benefit, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-[#005AA6]/20 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <h4 className="font-semibold">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center">Perguntas Frequentes</h3>
            {[
              { q: "Posso cancelar a qualquer momento?", a: "Sim! Sem multas ou taxas de cancelamento." },
              { q: "Como funciona a garantia?", a: "Se não aprovar seu benefício, devolvemos 100% do valor pago." },
              { q: "Aceita quais formas de pagamento?", a: "Cartão de crédito, débito, PIX e boleto bancário." }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#005AA6]/50 transition-all"
              >
                <summary className="font-medium cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </summary>
                <p className="mt-3 text-sm text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // Tela de Ajuda
  if (currentScreen === "help") {
    return (
      <div className="min-h-screen bg-[#0D0D0D]">
        <Header />
        
        <main className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold">Central de Ajuda</h1>
            <p className="text-gray-400">
              Encontre respostas para suas dúvidas
            </p>
          </div>

          {/* Busca */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar ajuda..."
              className="w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005AA6] focus:ring-2 focus:ring-[#005AA6]/20 transition-all"
            />
            <Info className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>

          {/* Categorias */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: MessageCircle,
                title: "Como usar o Dr. INSS",
                desc: "Aprenda a tirar o máximo do assistente virtual",
                articles: 8
              },
              {
                icon: FileText,
                title: "Documentação",
                desc: "Quais documentos você precisa",
                articles: 12
              },
              {
                icon: Shield,
                title: "Benefícios do INSS",
                desc: "Entenda seus direitos",
                articles: 15
              },
              {
                icon: Phone,
                title: "Contato e Suporte",
                desc: "Fale com nossa equipe",
                articles: 5
              }
            ].map((category, idx) => (
              <button
                key={idx}
                className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#005AA6]/50 transition-all text-left"
              >
                <div className="w-12 h-12 bg-[#005AA6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <category.icon className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{category.desc}</p>
                  <span className="text-xs text-[#005AA6]">{category.articles} artigos</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 flex-shrink-0" />
              </button>
            ))}
          </div>

          {/* Artigos Populares */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Artigos Populares</h3>
            {[
              "Como solicitar aposentadoria por idade",
              "Documentos necessários para dar entrada no INSS",
              "Como calcular o valor do meu benefício",
              "Prazos e agendamentos no INSS",
              "Como fazer perícia médica"
            ].map((article, idx) => (
              <button
                key={idx}
                className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#005AA6]/50 transition-all text-left"
              >
                <span className="text-gray-300">{article}</span>
                <ChevronRight className="w-5 h-5 text-gray-600 flex-shrink-0" />
              </button>
            ))}
          </div>

          {/* Contato */}
          <div className="bg-gradient-to-br from-[#005AA6]/20 to-[#003d73]/20 border border-[#005AA6]/30 rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-lg">Ainda precisa de ajuda?</h3>
            <p className="text-gray-300">
              Nossa equipe está pronta para te atender
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 bg-[#005AA6] hover:bg-[#0077cc] text-white font-medium rounded-xl transition-all">
                <MessageCircle className="w-5 h-5" />
                Chat ao Vivo
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-all">
                <Phone className="w-5 h-5" />
                Ligar
              </button>
            </div>
          </div>

          {/* Feedback */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-lg">Deixe seu Feedback</h3>
            <textarea
              placeholder="Como podemos melhorar?"
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005AA6] focus:ring-2 focus:ring-[#005AA6]/20 transition-all resize-none"
            />
            <button className="w-full py-3 bg-gradient-to-r from-[#005AA6] to-[#0077cc] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#005AA6]/30 transition-all">
              Enviar Feedback
            </button>
          </div>
        </main>
      </div>
    );
  }

  return null;
}
