import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Hakkimda = () => {
  return (
    <Container maxWidth="md" sx={{backgroundColor: 'white', padding: 5, marginY: 5, borderRadius: '8px' }}>
      {/* Ana Başlık */}
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Hakkımda
        </Typography>
      </Box>

      {/* Eğitim ve Deneyim */}
      <Box my={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Eğitim ve Deneyim
        </Typography>
        <Typography variant="body1" paragraph>
          Mersin Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum ve bu alandaki bilgi birikimimi yazılım geliştirme sektöründe profesyonel olarak kullanmaktayım. 
          <strong> React</strong> ve <strong>React Native</strong> gibi modern teknolojiler üzerinde uzmanlaştım ve hem front-end hem de back-end geliştirme süreçlerinde geniş bir deneyime sahibim.
        </Typography>
      </Box>

      {/* Front-End Geliştirme */}
      <Box my={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Front-End Geliştirme
        </Typography>
        <Typography variant="body1" paragraph>
          Front-end geliştirme süreçlerinde <strong>HTML</strong>, <strong>CSS</strong> ve <strong>JavaScript</strong> gibi temel teknolojileri kullanarak, estetik ve kullanıcı dostu arayüzler geliştiriyorum. 
          <strong> Tailwind CSS</strong> gibi stil kütüphaneleriyle çalışma deneyimim sayesinde, görsel açıdan zengin ve optimize edilmiş web siteleri oluşturmaktayım. 
          Ayrıca, <strong>responsive</strong> tasarımlar sayesinde projelerin her cihazda mükemmel çalışmasını sağlıyorum.
        </Typography>
      </Box>

      {/* Mobil Uygulama Geliştirme */}
      <Box my={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Mobil Uygulama Geliştirme
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>React Native</strong> kullanarak, iOS ve Android platformları için performans odaklı mobil uygulamalar geliştiriyorum. 
          Kullanıcıların ihtiyaçlarına en uygun çözümleri sunmak için <strong>API</strong> entegrasyonları ve veri yönetimi gibi konularda derinlemesine bilgiye sahibim. 
          Hedefim, her iki platformda da kullanıcıların beklentilerini aşan uygulamalar üretmektir.
        </Typography>
      </Box>

      {/* Sürekli Öğrenme ve Gelişim */}
      <Box my={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Sürekli Öğrenme ve Gelişim
        </Typography>
        <Typography variant="body1" paragraph>
          Yazılım dünyası sürekli gelişen bir alan olduğu için, en yeni teknolojileri ve en iyi uygulamaları yakından takip ederek kendimi sürekli geliştiriyorum. 
          Projelerde, takım arkadaşlarımla etkili bir iş birliği yaparak, kaliteli ve zamanında teslim edilen çözümler üretmeye özen gösteriyorum.
        </Typography>
      </Box>

      {/* UX/UI Tasarım */}
      <Box my={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          UX/UI Tasarım
        </Typography>
        <Typography variant="body1" paragraph>
          Yazılım geliştirmenin yanı sıra, <strong>kullanıcı deneyimi (UX)</strong> ve <strong>kullanıcı arayüzü (UI)</strong> tasarımına da özel bir ilgi duyuyorum. 
          Bu alandaki bilgi birikimimi projelerime entegre ederek, işlevsel olduğu kadar görsel açıdan da tatmin edici deneyimler sunmayı hedefliyorum.
        </Typography>
      </Box>

      {/* Sonuç */}
      <Box my={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Sonuç
        </Typography>
        <Typography variant="body1" paragraph>
          Bilgisayar mühendisliği eğitimim ve yazılım geliştirme konusundaki kapsamlı tecrübemle, teknolojiyi kullanarak yaratıcı, yenilikçi ve sürdürülebilir çözümler üretmeye devam ediyorum. 
          Hedefim, her zaman kullanıcılar için değer yaratan projeler geliştirmek.
        </Typography>
      </Box>
    </Container>
  );
};

export default Hakkimda;

export const Head = () => <title>Hakkımda</title>


