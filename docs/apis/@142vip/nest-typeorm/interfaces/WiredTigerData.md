[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / WiredTigerData

# 接口: WiredTigerData

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5271

## theme_extends

- [`Document`](../namespaces/BSON/interfaces/Document.md)

## 可索引

> \[`key`: `string`\]: `any`

## 属性

### block-manager

> **block-manager**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5286

#### allocations requiring file extension

> **allocations requiring file extension**: `number`

#### blocks allocated

> **blocks allocated**: `number`

#### blocks freed

> **blocks freed**: `number`

#### checkpoint size

> **checkpoint size**: `number`

#### file allocation unit size

> **file allocation unit size**: `number`

#### file bytes available for reuse

> **file bytes available for reuse**: `number`

#### file magic number

> **file magic number**: `number`

#### file major version number

> **file major version number**: `number`

#### file size in bytes

> **file size in bytes**: `number`

#### minor version number

> **minor version number**: `number`

***

### btree

> **btree**: `object` & [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5298

#### 类型声明

##### btree checkpoint generation

> **btree checkpoint generation**: `number`

##### column-store fixed-size leaf pages

> **column-store fixed-size leaf pages**: `number`

##### column-store internal pages

> **column-store internal pages**: `number`

##### column-store variable-size deleted values

> **column-store variable-size deleted values**: `number`

##### column-store variable-size leaf pages

> **column-store variable-size leaf pages**: `number`

##### column-store variable-size RLE encoded values

> **column-store variable-size RLE encoded values**: `number`

##### fixed-record size

> **fixed-record size**: `number`

##### maximum internal page key size

> **maximum internal page key size**: `number`

##### maximum internal page size

> **maximum internal page size**: `number`

##### maximum leaf page key size

> **maximum leaf page key size**: `number`

##### maximum leaf page size

> **maximum leaf page size**: `number`

##### maximum leaf page value size

> **maximum leaf page value size**: `number`

##### maximum tree depth

> **maximum tree depth**: `number`

##### number of key/value pairs

> **number of key/value pairs**: `number`

##### overflow pages

> **overflow pages**: `number`

##### pages rewritten by compaction

> **pages rewritten by compaction**: `number`

##### row-store internal pages

> **row-store internal pages**: `number`

##### row-store leaf pages

> **row-store leaf pages**: `number`

***

### cache

> **cache**: `object` & [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5318

#### 类型声明

##### bytes currently in the cache

> **bytes currently in the cache**: `number`

##### bytes read into cache

> **bytes read into cache**: `number`

##### bytes written from cache

> **bytes written from cache**: `number`

##### checkpoint blocked page eviction

> **checkpoint blocked page eviction**: `number`

##### data source pages selected for eviction unable to be evicted

> **data source pages selected for eviction unable to be evicted**: `number`

##### hazard pointer blocked page eviction

> **hazard pointer blocked page eviction**: `number`

##### in-memory page passed criteria to be split

> **in-memory page passed criteria to be split**: `number`

##### in-memory page splits

> **in-memory page splits**: `number`

##### internal pages evicted

> **internal pages evicted**: `number`

##### internal pages split during eviction

> **internal pages split during eviction**: `number`

##### leaf pages split during eviction

> **leaf pages split during eviction**: `number`

##### modified pages evicted

> **modified pages evicted**: `number`

##### overflow pages read into cache

> **overflow pages read into cache**: `number`

##### overflow values cached in memory

> **overflow values cached in memory**: `number`

##### page split during eviction deepened the tree

> **page split during eviction deepened the tree**: `number`

##### page written requiring lookaside records

> **page written requiring lookaside records**: `number`

##### pages read into cache

> **pages read into cache**: `number`

##### pages read into cache requiring lookaside entries

> **pages read into cache requiring lookaside entries**: `number`

##### pages requested from the cache

> **pages requested from the cache**: `number`

##### pages written from cache

> **pages written from cache**: `number`

##### pages written requiring in-memory restoration

> **pages written requiring in-memory restoration**: `number`

##### tracked dirty bytes in the cache

> **tracked dirty bytes in the cache**: `number`

##### unmodified pages evicted

> **unmodified pages evicted**: `number`

***

### cache\_walk

> **cache\_walk**: `object` & [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5343

#### 类型声明

##### Average difference between current eviction generation when the page was last considered

> **Average difference between current eviction generation when the page was last considered**: `number`

##### Average on-disk page image size seen

> **Average on-disk page image size seen**: `number`

##### Clean pages currently in cache

> **Clean pages currently in cache**: `number`

##### Current eviction generation

> **Current eviction generation**: `number`

##### Dirty pages currently in cache

> **Dirty pages currently in cache**: `number`

##### Entries in the root page

> **Entries in the root page**: `number`

##### Internal pages currently in cache

> **Internal pages currently in cache**: `number`

##### Leaf pages currently in cache

> **Leaf pages currently in cache**: `number`

##### Maximum difference between current eviction generation when the page was last considered

> **Maximum difference between current eviction generation when the page was last considered**: `number`

##### Maximum page size seen

> **Maximum page size seen**: `number`

##### Minimum on-disk page image size seen

> **Minimum on-disk page image size seen**: `number`

##### On-disk page image sizes smaller than a single allocation unit

> **On-disk page image sizes smaller than a single allocation unit**: `number`

##### Pages created in memory and never written

> **Pages created in memory and never written**: `number`

##### Pages currently queued for eviction

> **Pages currently queued for eviction**: `number`

##### Pages that could not be queued for eviction

> **Pages that could not be queued for eviction**: `number`

##### Refs skipped during cache traversal

> **Refs skipped during cache traversal**: `number`

##### Size of the root page

> **Size of the root page**: `number`

##### Total number of pages currently in cache

> **Total number of pages currently in cache**: `number`

***

### compression

> **compression**: `object` & [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5363

#### 类型声明

##### compressed pages read

> **compressed pages read**: `number`

##### compressed pages written

> **compressed pages written**: `number`

##### page written failed to compress

> **page written failed to compress**: `number`

##### page written was too small to compress

> **page written was too small to compress**: `number`

##### raw compression call failed, additional data available

> **raw compression call failed, additional data available**: `number`

##### raw compression call failed, no additional data available

> **raw compression call failed, no additional data available**: `number`

##### raw compression call succeeded

> **raw compression call succeeded**: `number`

***

### cursor

> **cursor**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5372

#### bulk-loaded cursor-insert calls

> **bulk-loaded cursor-insert calls**: `number`

#### create calls

> **create calls**: `number`

#### cursor-insert key and value bytes inserted

> **cursor-insert key and value bytes inserted**: `number`

#### cursor-remove key bytes removed

> **cursor-remove key bytes removed**: `number`

#### cursor-update value bytes updated

> **cursor-update value bytes updated**: `number`

#### insert calls

> **insert calls**: `number`

#### next calls

> **next calls**: `number`

#### prev calls

> **prev calls**: `number`

#### remove calls

> **remove calls**: `number`

#### reset calls

> **reset calls**: `number`

#### restarted searches

> **restarted searches**: `number`

#### search calls

> **search calls**: `number`

#### search near calls

> **search near calls**: `number`

#### truncate calls

> **truncate calls**: `number`

#### update calls

> **update calls**: `number`

***

### LSM

> **LSM**: `object` & [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5272

#### 类型声明

##### bloom filter false positives

> **bloom filter false positives**: `number`

##### bloom filter hits

> **bloom filter hits**: `number`

##### bloom filter misses

> **bloom filter misses**: `number`

##### bloom filter pages evicted from cache

> **bloom filter pages evicted from cache**: `number`

##### bloom filter pages read into cache

> **bloom filter pages read into cache**: `number`

##### bloom filters in the LSM tree

> **bloom filters in the LSM tree**: `number`

##### chunks in the LSM tree

> **chunks in the LSM tree**: `number`

##### highest merge generation in the LSM tree

> **highest merge generation in the LSM tree**: `number`

##### queries that could have benefited from a Bloom filter that did not exist

> **queries that could have benefited from a Bloom filter that did not exist**: `number`

##### sleep for LSM checkpoint throttle

> **sleep for LSM checkpoint throttle**: `number`

##### sleep for LSM merge throttle

> **sleep for LSM merge throttle**: `number`

##### total size of bloom filters

> **total size of bloom filters**: `number`

***

### reconciliation

> **reconciliation**: `object` & [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5389

#### 类型声明

##### dictionary matches

> **dictionary matches**: `number`

##### fast-path pages deleted

> **fast-path pages deleted**: `number`

##### internal page key bytes discarded using suffix compression

> **internal page key bytes discarded using suffix compression**: `number`

##### internal page multi-block writes

> **internal page multi-block writes**: `number`

##### internal-page overflow keys

> **internal-page overflow keys**: `number`

##### leaf page key bytes discarded using prefix compression

> **leaf page key bytes discarded using prefix compression**: `number`

##### leaf page multi-block writes

> **leaf page multi-block writes**: `number`

##### leaf-page overflow keys

> **leaf-page overflow keys**: `number`

##### maximum blocks required for a page

> **maximum blocks required for a page**: `number`

##### overflow values written

> **overflow values written**: `number`

##### page checksum matches

> **page checksum matches**: `number`

##### page reconciliation calls

> **page reconciliation calls**: `number`

##### page reconciliation calls for eviction

> **page reconciliation calls for eviction**: `number`

##### pages deleted

> **pages deleted**: `number`
