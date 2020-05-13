import scrapy

class AhlolbaitComSpider(scrapy.Spider):
  name = "ahlolbait_com"

  def start_requests(self):
    url = 'http://ahlolbait.com/article/18123/%D9%81%D9%87%D8%B1%D8%B3%D8%AA-%D8%AD%DA%A9%D9%85%D8%AA-%D9%87%D8%A7%DB%8C-%D9%86%D9%87%D8%AC-%D8%A7%D9%84%D8%A8%D9%84%D8%A7%D8%BA%D9%87'
    yield scrapy.Request(url=url, callback=self.parse)

  def parse(self, response):
    hekmats_urls = response.xpath('//div[@id="node-18123"]/div/div/div/div/ul/li/a/@href').getall()
    for ind, url in enumerate(hekmats_urls[:5], start=1):
      yield scrapy.Request(url=url, callback=self.parse_hekmat, meta={'hekmat_id': ind})

  def parse_hekmat(self, response):
    url_id = response.url.split("/")[4]
    # direct path doesn't work for some hakmats, we should use more general method
    # title_path = '//div[@id="node-%s"]/div/div/div/div/table/tbody/tr/td[@style="vertical-align: top;"]/strong/text()' % url_id
    # persian_path = '//div[@id="node-%s"]/div/div/div/div/table/tbody/tr/td[@style="vertical-align: top;"]/text()' % url_id
    # arabic_path = '//div[@id="node-%s"]/div/div/div/div/table/tbody/tr/td//span/text()' % url_id
    hekmat_id = response.meta['hekmat_id']

    title_path = '//div[@id="node-%s"]/h1/a/text()' % url_id
    title = response.xpath(title_path).get()
    path = '//div[@id="node-%s"]/div/div/div/div/table/tbody/tr/td' % url_id
    tds = response.xpath(path)
    arabic = tds[2].xpath('.//text()').getall()
    cat = tds[3].xpath('.//strong/text()').get()
    persian = tds[3].xpath('.//*[not(self::strong)]/text()').getall()
    yield {
      'id': hekmat_id,
      'title': title,
      'cat': cat,
      'arabic': arabic,
      'persian': persian
    }
