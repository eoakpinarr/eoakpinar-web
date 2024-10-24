import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const Hizmetler = () => {
  return (
    <Container maxWidth="md" sx={{ backgroundColor: 'white', padding: 5, marginY: 5, borderRadius: '8px' }}>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Hizmetlerimiz
        </Typography>

        {/* Web Geliştirme Hizmetleri */}
        <Typography variant="h5" gutterBottom sx={{ mt: 3, mb: 2 }}>
          Web Geliştirme Hizmetleri
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Dijital dünyada güçlü bir varlık oluşturmanın en önemli adımlarından biri, etkileyici ve kullanıcı dostu bir web sitesi tasarlamaktır. Kullanıcı deneyimi ve görsel estetik açısından optimize edilmiş, modern web siteleri geliştiriyoruz. React, HTML, CSS ve JavaScript gibi en güncel teknolojileri kullanarak:
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Kurumsal Web Siteleri
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          İşletmenizin profesyonel kimliğini yansıtacak, sade ve etkili web siteleri tasarlıyoruz. Hedef kitlenize uygun, SEO dostu ve responsive tasarımlarla, markanızın çevrimiçi varlığını güçlendiriyoruz.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Kişisel Blog ve Portfolyo Siteleri
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Kişisel markanızı sergileyebileceğiniz veya profesyonel yetkinliklerinizi gösterebileceğiniz portföy siteleri geliştiriyoruz. Özgün tasarım ve içerik yönetim sistemleri ile, kolay yönetilebilir bir yapı sağlıyoruz.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          E-Ticaret Çözümleri
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Online satış yapmak isteyen işletmelere özel e-ticaret platformları sunuyoruz. Güvenli ödeme sistemleri, kullanıcı dostu alışveriş deneyimi ve mobil uyumluluk ile satışlarınızı artırmayı hedefliyoruz.
        </Typography>

        {/* Mobil Uygulama Geliştirme */}
        <Typography variant="h5" gutterBottom sx={{ mt: 3, mb: 2 }}>
          Mobil Uygulama Geliştirme
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Mobil cihazların günlük hayatın ayrılmaz bir parçası haline gelmesiyle, işletmeler için mobil uygulama çözümleri de büyük önem kazandı. React Native teknolojisiyle, hem iOS hem de Android platformları için performanslı ve kullanıcı dostu mobil uygulamalar geliştiriyoruz:
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Kullanıcı Deneyimi Odaklı Mobil Uygulamalar
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Hem tasarım hem de işlevsellik açısından kullanıcı ihtiyaçlarını ön planda tutarak, sorunsuz ve akıcı mobil uygulamalar geliştiriyoruz. Kullanıcıların ihtiyaçlarına uygun, basit ve anlaşılır arayüzlerle işlevsel çözümler sunuyoruz.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          API Entegrasyonları
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Mobil uygulamalarınız için gerekli olan üçüncü parti API'ler veya özel yazılımlar ile entegrasyonlar gerçekleştiriyoruz. Verileri güvenli bir şekilde işleyen, hızlı ve optimize edilmiş uygulamalar sunuyoruz.
        </Typography>

        {/* Full-Stack Yazılım Geliştirme */}
        <Typography variant="h5" gutterBottom sx={{ mt: 3, mb: 2 }}>
          Full-Stack Yazılım Geliştirme
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Projenizin tüm aşamalarında ihtiyaç duyduğunuz desteği sağlayarak, baştan sona yazılım çözümleri sunuyoruz. Front-end ve back-end geliştirme konusundaki deneyimimizle, tam kapsamlı yazılım çözümleri üretiyoruz:
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Back-End Geliştirme
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Projelerinizin veri yönetimi ve sunucu tarafındaki ihtiyaçlarını karşılıyoruz. MongoDB, Node.js ve Express gibi güçlü teknolojiler kullanarak, güvenli, ölçeklenebilir ve hızlı arka uç çözümleri sağlıyoruz.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Front-End Geliştirme
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Modern, kullanıcı dostu ve dinamik arayüzler geliştiriyoruz. React ve diğer front-end teknolojileri ile, her cihazda sorunsuz çalışan web uygulamaları üretiyoruz.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Tam Entegre Çözümler
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Front-end ve back-end arasındaki işbirliğini en üst seviyeye çıkararak, uçtan uca çözümler sunuyoruz. Projelerinizin hem görünümü hem de işlevselliği için kusursuz bir deneyim sağlıyoruz.
        </Typography>

        {/* UX/UI Tasarım ve Optimizasyon */}
        <Typography variant="h5" gutterBottom sx={{ mt: 3, mb: 2 }}>
          UX/UI Tasarım ve Optimizasyon
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Kullanıcıların dijital ürünlerle olan etkileşimlerini anlamak ve bu etkileşimleri geliştirmek, başarılı bir yazılım projesinin temelidir. Kullanıcı deneyimi (UX) ve kullanıcı arayüzü (UI) tasarımı alanındaki bilgi birikimimizi projelerinize entegre ederek, görsel olarak çekici ve işlevsel arayüzler oluşturuyoruz:
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Kullanıcı Araştırması ve Testler
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Kullanıcılarınızın ihtiyaçlarını ve beklentilerini anlamak için detaylı kullanıcı araştırmaları ve testler yapıyoruz. Bu araştırmalar doğrultusunda, tasarımlarımızı sürekli olarak optimize ediyoruz.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Responsive ve Mobil Uyumluluk
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Geliştirdiğimiz arayüzler, tüm cihazlar için optimize edilmiştir. Kullanıcıların masaüstü, tablet veya mobil cihazlardan sorunsuz bir deneyim yaşamalarını sağlıyoruz.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Görsel Tasarım
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Göz alıcı ve modern görsellerle, kullanıcıların dikkatini çekecek arayüzler tasarlıyoruz. Renk paletleri, tipografi ve düzenlerle, markanızı en iyi şekilde yansıtıyoruz.
        </Typography>

        {/* Performans Optimizasyonu */}
        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Performans Optimizasyonu
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', lineHeight: 1.8, mb: 3 }}>
          Projenizin performansını sürekli izliyor ve optimize ediyoruz. Hızlı, güvenli ve verimli çözümler sunarak, müşteri memnuniyetini en üst seviyede tutuyoruz.
        </Typography>
      </Box>
    </Container>

  );
};

export default Hizmetler;

export const Head = () => <title>Hizmetler</title>

