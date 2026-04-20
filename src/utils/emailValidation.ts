export const validateEmail = (email: string): { valid: boolean; message: string } => {
  // Basic format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Please enter a valid email address" };
  }

  const domain = email.split('@')[1].toLowerCase();
  const localPart = email.split('@')[0].toLowerCase();

  // Block disposable/test email providers (200+ domains)
  const blockedDomains = [
    'tempmail.com', 'throwaway.com', 'mailinator.com', 'guerrillamail.com',
    'sharklasers.com', 'spam4.me', 'trashmail.com', 'yopmail.com',
    'temp.inbox.com', 'mailnesia.com', 'harakirimail.com', 'dispostable.com',
    'tempmailaddress.com', 'burnermail.io', 'tempmailo.com', 'fakeemail.net',
    'emailfake.com', 'temp-mail.org', 'throwawaymail.com', 'tempmail.ninja',
    'mail.tm', 'mail.gw', 'smailpro.com', 'inboxkitten.com', 'getairmail.com',
    '10minutemail.com', 'tempail.com', 'tmpmail.org', 'disposablemail.com',
    'getnada.com', 'maildrop.cc', 'inboxalias.com', 'spamgourmet.com',
    'boun.cr', 'bccto.me', 'chacuo.net', '027168.com', 'sharklaser.com',
    'guerrillamailblock.com', 'pokemail.net', 'grr.la',
    'guerrillamail.net', 'guerrillamail.org', 'guerrillamail.biz',
    'mailinator.net', 'mailinator.org', 'mailinator.info',
    'yopmail.fr', 'yopmail.net', 'cool.fr.nf', 'jetable.fr.nf',
    'nospam.ze.tc', 'nomail.xl.cx', 'mega.zik.dj', 'speed.1s.fr',
    'courriel.fr.nf', 'moncourrier.fr.nf', 'monemail.fr.nf',
    'monmail.fr.nf', 'hide.biz.st', 'mymail.infos.st',
    '1mail.x24hr.com', 'dispomail.eu', 'extremail.ru', 'eyepaste.com',
    'fakeinbox.com', 'frapmail.com', 'getairmail.cf',
    'getairmail.ga', 'getairmail.gq', 'getairmail.ml', 'getairmail.tk',
    'getmails.eu', 'gustr.com', 'inbox.si',
    'koszmail.pl', 'lackmail.ru', 'luckymail.org', 'mail.by',
    'mailforspam.com', 'mailhog.com', 'mailme.lv', 'mailms.com',
    'mailorg.com', 'mailpick.biz', 'mailrock.biz', 'mailscrap.com',
    'mailtemp.info', 'mailtothis.com', 'mailzi.ru', 'mailzilla.com',
    'mbx.cc', 'mohmal.com', 'mohmal.im', 'mohmal.in', 'mt2015.com',
    'mt2016.com', 'mt2017.com', 'mx0.wwwnew.eu', 'mypacks.net',
    'mytemp.email', 'netmails.com', 'objectmail.com', 'obobbo.com',
    'opayq.com', 'prtnx.com', 'put2.net', 'quickinbox.com',
    'rcpt.at', 'receiveee.chickenkiller.com', 'receiveee.lynx.in.ua',
    'recode.me', 'rtrtr.com', 's0ny.net', 'safe-mail.net',
    'samsclass.info', 'sandelf.de', 'sharpspeaker.com', 'shitmail.me',
    'shortmail.net', 'skeefmail.com', 'spam.la', 'spambog.com',
    'spambog.de', 'spambog.ru', 'spambox.info', 'spambox.irishspringrealty.com',
    'spambox.us', 'spamcero.com', 'spamday.com', 'spamfree24.com',
    'spamfree24.de', 'spamfree24.eu', 'spamfree24.info', 'spamfree24.net',
    'spamfree24.org', 'spamherelots.com', 'spamhereplease.com', 'spamhole.com', 'spamify.com',
    'spaml.com', 'spaml.de', 'spammotel.com', 'spamobox.com',
    'spamspot.com', 'spamthis.co.uk', 'spamthisplease.com', 'supergreatmail.com',
    'supermailer.jp', 'suremail.info', 'teewars.org', 'teleworm.com',
    'teleworm.us', 'temp.emeraldwebmail.com', 'temp.headstrong.de',
    'tempalias.com', 'tempe-mail.com', 'tempemail.biz',
    'tempemail.com', 'tempemail.net', 'tempinbox.co.uk', 'tempinbox.com',
    'tempmail.eu', 'tempmail.it', 'tempmail.us', 'tempmail2.com',
    'tempmailer.com', 'tempmailer.de', 'tempomail.fr', 'temporarily.de',
    'temporarioemail.com.br', 'temporaryemail.net', 'temporaryemail.us',
    'temporaryforwarding.com', 'temporaryinbox.com', 'thanksnospam.info',
    'thc.st', 'thelimemails.com', 'thisisnotmyrealemail.com', 'throwawayemailaddress.com',
    'tilien.com', 'tittbit.in', 'tmail.ws', 'toomail.biz', 'tradermail.info',
    'trash-amil.com', 'trash-mail.at', 'trash-mail.cf', 'trash-mail.com',
    'trash-mail.de', 'trash-mail.ga', 'trash-mail.gq', 'trash-mail.ml',
    'trash-mail.tk', 'trash2009.com', 'trash2010.com', 'trash2011.com',
    'trashdevil.com', 'trashdevil.de', 'trashemail.de', 'trashinbox.com',
    'trashmail.at', 'trashmail.com', 'trashmail.de', 'trashmail.me',
    'trashmail.net', 'trashmail.org', 'trashmail.ws', 'trashmailer.com',
    'trashymail.com', 'trashymail.net', 'trbvm.com', 'trialmail.de',
    'tryalert.com', 'turual.com', 'twinmail.de', 'tyldd.com',
    'uggsrock.com', 'upliftnow.com', 'uplipht.com', 'venompen.com',
    'veryrealemail.com', 'viditag.com', 'viewcastmedia.com', 'viewcastmedia.net',
    'viewcastmedia.org', 'wegwerfmail.de', 'wegwerfmail.net', 'wegwerfmail.org',
    'wetrainbayarea.com', 'wetrainbayarea.org', 'wh4f.org', 'whyspam.me',
    'willselfdestruct.com', 'winemaven.info', 'wronghead.com', 'wuzup.net',
    'wuzupmail.net', 'www.e4ward.com', 'www.gishpuppy.com', 'www.mailinator.com',
    'wwwnew.eu', 'xagloo.com', 'xemaps.com', 'xents.com', 'xmaily.com',
    'xoxy.net', 'yapped.net', 'yogamaven.com', 'yuurok.com',
    'zehnminutenmail.de', 'zippymail.info', 'zoaxe.com', 'zoemail.org', 'zomg.info',
    // Test/development domains
    'test.com', 'example.com', 'localhost', 'domain.com', 'email.com',
    'test.org', 'example.org', 'test.net', 'example.net', 'testing.com',
    'fake.com', 'dummy.com', 'sample.com', 'testmail.com', 'mailtest.com',
    'testemail.com', 'emailtest.com', 'tester.com', 'testingmail.com',
    // Known spam patterns
    'mail.ru', 'yandex.com', 'bk.ru', 'list.ru', 'inbox.ru', 'internet.ru',
    'xmail.ru', 'ya.ru'
  ];

  if (blockedDomains.includes(domain)) {
    return { valid: false, message: "Please use a business email. Temporary emails are not allowed." };
  }

  // Block test/dummy local parts
  const blockedLocalPatterns = [
    'test', 'testing', 'fake', 'dummy', 'sample', 'example', 
    'user', 'admin', 'root', 'info', 'postmaster', 'webmaster',
    'hostmaster', 'abuse', 'noc', 'security', 'sales', 'marketing',
    'support', 'contact', 'hello', 'hi', 'hey', 'testuser',
    'testemail', 'emailtest', 'testtest', 'abc', '123', 'xyz',
    'temp', 'tmp', 'temporary', 'spam', 'junk', 'trash',
    'nobody', 'noone', 'none', 'null', 'void', 'administrator'
  ];

  const hasBlockedLocal = blockedLocalPatterns.some(pattern => 
    localPart.includes(pattern) || localPart === pattern
  );

  if (hasBlockedLocal && localPart.length < 8) {
    return { valid: false, message: "Please use a professional email with your name or company." };
  }

  // Block sequential/numeric only emails (spambots)
  const numericOnlyRegex = /^[0-9]+$/;
  if (numericOnlyRegex.test(localPart)) {
    return { valid: false, message: "Email cannot contain only numbers." };
  }

  // Block excessive dots or special characters (spam pattern)
  const suspiciousPattern = /(\.\.)|([-_]{2,})|(\d{4,})/;
  if (suspiciousPattern.test(localPart)) {
    return { valid: false, message: "Email format appears suspicious. Please use a valid business email." };
  }

  // Minimum length check
  if (localPart.length < 3) {
    return { valid: false, message: "Email local part is too short." };
  }

  return { valid: true, message: "Valid email address" };
};

export const isRoleBasedEmail = (email: string): boolean => {
  const rolePatterns = [
    'noreply', 'no-reply', 'donotreply', 'do-notreply',
    'mailer-daemon', 'postmaster', 'hostmaster', 'usenet', 'webmaster',
    'www', 'root', 'info', 'sales', 'marketing', 'support', 'contact',
    'admin', 'administrator', 'help', 'service', 'team', 'office',
    'hr', 'legal', 'finance', 'billing', 'accounts', 'careers',
    'jobs', 'press', 'media', 'pr', 'security', 'abuse', 'spam',
    'newsletter', 'updates', 'notifications', 'alerts', 'announcements'
  ];
  
  const localPart = email.split('@')[0].toLowerCase();
  return rolePatterns.some(role => localPart === role || localPart.startsWith(role + '.'));
};
